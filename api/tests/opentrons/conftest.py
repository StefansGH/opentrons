# Uncomment to enable logging during tests
# import logging
# from logging.config import dictConfig
from opentrons.config import robot_configs
from opentrons.protocol_api.labware import Labware
from opentrons.protocols.implementations.labware import LabwareImplementation

try:
    import aionotify
except OSError:
    aionotify = None  # type: ignore
import asyncio
import os
import io
import json
import pathlib
import re
import shutil
import tempfile
from collections import namedtuple
from functools import partial
import zipfile

import pytest

from opentrons.api.routers import MainRouter
from opentrons.api import models
from opentrons.data_storage import database_migration
from opentrons import config
from opentrons import hardware_control as hc
from opentrons.hardware_control import API, ThreadManager, ThreadedAsyncLock
from opentrons.protocol_api import ProtocolContext
from opentrons.types import Mount, Location, Point


Session = namedtuple(
    'Session',
    ['server', 'socket', 'token', 'call'])

Protocol = namedtuple(
    'Protocol',
    ['text', 'filename', 'filelike'])


@pytest.fixture(autouse=True)
def asyncio_loop_exception_handler(loop):
    def exception_handler(loop, context):
        pytest.fail(str(context))
    loop.set_exception_handler(exception_handler)
    yield
    loop.set_exception_handler(None)


def state(topic, state):
    def _match(item):
        return \
            item['topic'] == topic and \
            item['payload'].state == state

    return _match


def log_by_axis(log, axis):
    from functools import reduce

    def reducer(e1, e2):
        return {
            axis: e1[axis] + [round(e2[axis])]
            for axis in axis
        }

    return reduce(reducer, log, {axis: [] for axis in axis})


@pytest.mark.apiv1
@pytest.fixture(scope='session')
def template_db(tmpdir_factory):
    template_db = tmpdir_factory.mktemp('template_db.sqlite')\
                                .join('opentrons.db')
    config.CONFIG['labware_database_file'] = str(template_db)
    database_migration.check_version_and_perform_full_migration()
    return template_db


@pytest.fixture
def mock_config():
    """Robot config setup and teardown"""
    yield robot_configs.load()
    robot_configs.clear()


@pytest.mark.apiv1
@pytest.fixture(scope='function')
def config_tempdir(tmpdir, template_db):
    os.environ['OT_API_CONFIG_DIR'] = str(tmpdir)
    config.reload()
    if not os.path.exists(config.CONFIG['labware_database_file']):
        shutil.copyfile(
            template_db, config.CONFIG['labware_database_file'])
    yield tmpdir, template_db


@pytest.fixture
def ot_config_tempdir(tmpdir):
    os.environ['OT_API_CONFIG_DIR'] = str(tmpdir)
    config.reload()

    yield tmpdir

    del os.environ['OT_API_CONFIG_DIR']
    config.reload()


@pytest.fixture
def labware_offset_tempdir(ot_config_tempdir):
    yield config.get_opentrons_path('labware_calibration_offsets_dir_v2')


@pytest.mark.apiv1
@pytest.fixture(scope='function')
def offsets_tempdir(tmpdir, template_db):
    config.CONFIG['labware_calibration_offsets_dir_v2'] = str(tmpdir)
    config.reload()
    yield tmpdir


@pytest.fixture(autouse=True)
def clear_feature_flags():
    ff_file = config.CONFIG['feature_flags_file']
    if os.path.exists(ff_file):
        os.remove(ff_file)
    yield
    if os.path.exists(ff_file):
        os.remove(ff_file)


@pytest.fixture
def wifi_keys_tempdir():
    old_wifi_keys = config.CONFIG['wifi_keys_dir']
    with tempfile.TemporaryDirectory() as td:
        config.CONFIG['wifi_keys_dir'] = pathlib.Path(td)
        yield td
        config.CONFIG['wifi_keys_dir'] = old_wifi_keys


@pytest.fixture
def is_robot(monkeypatch):
    monkeypatch.setattr(config, 'IS_ROBOT', True)
    yield
    monkeypatch.setattr(config, 'IS_ROBOT', False)


# -------feature flag fixtures-------------
@pytest.fixture
async def calibrate_bottom_flag():
    await config.advanced_settings.set_adv_setting('calibrateToBottom', True)
    yield
    await config.advanced_settings.set_adv_setting('calibrateToBottom', False)


@pytest.fixture
async def short_trash_flag():
    await config.advanced_settings.set_adv_setting('shortFixedTrash', True)
    yield
    await config.advanced_settings.set_adv_setting('shortFixedTrash', False)


@pytest.fixture
async def old_aspiration(monkeypatch):
    await config.advanced_settings.set_adv_setting(
        'useOldAspirationFunctions', True)
    yield
    await config.advanced_settings.set_adv_setting(
        'useOldAspirationFunctions', False)


@pytest.fixture
async def use_new_calibration(monkeypatch):
    await config.advanced_settings.set_adv_setting(
        'enableTipLengthCalibration', True)
    yield
    await config.advanced_settings.set_adv_setting(
        'enableTipLengthCalibration', False)
# -----end feature flag fixtures-----------


@pytest.fixture(params=[False, True])
async def toggle_new_calibration(request):
    if request.param:
        await config.advanced_settings.set_adv_setting(
            'enableTipLengthCalibration', True)
        yield
        await config.advanced_settings.set_adv_setting(
            'enableTipLengthCalibration', False)
    else:
        yield


@pytest.fixture(params=["testosaur_v2.py"])
def protocol(request):
    try:
        root = request.getfixturevalue('protocol_file')
    except Exception:
        root = request.param

    filename = os.path.join(os.path.dirname(__file__), 'data', root)

    file = open(filename)
    text = ''.join(list(file))
    file.seek(0)
    return Protocol(text=text, filename=filename, filelike=file)


@pytest.fixture(params=["no_clear_tips.py"])
def tip_clear_protocol(request):
    try:
        root = request.getfixturevalue('protocol_file')
    except Exception:
        root = request.param

    filename = os.path.join(os.path.dirname(__file__), 'data', root)

    file = open(filename)
    text = ''.join(list(file))
    return Protocol(text=text, filename=filename, filelike=file)


@pytest.fixture
def session_manager(main_router):
    return main_router.session_manager


def fuzzy_assert(result, expected):
    expected_re = ['.*'.join(['^'] + item + ['$']) for item in expected]

    assert len(result) == len(expected_re), \
        'result and expected have different length'

    for idx, (res, exp) in enumerate(zip(result, expected_re)):
        assert re.compile(
            exp.lower()).match(res.lower()), "element {}: {} didn't match {}" \
            .format(idx, res, exp)


@pytest.fixture
def virtual_smoothie_env(monkeypatch):
    # TODO (ben 20180426): move this to the .env file
    monkeypatch.setenv('ENABLE_VIRTUAL_SMOOTHIE', 'true')
    yield
    monkeypatch.setenv('ENABLE_VIRTUAL_SMOOTHIE', 'false')


@pytest.mark.skipif(aionotify is None,
                    reason="requires inotify (linux only)")
@pytest.fixture
async def hardware(request, loop, virtual_smoothie_env):
    hw_sim = ThreadManager(API.build_hardware_simulator)
    old_config = config.robot_configs.load()
    try:
        yield hw_sim
    finally:
        config.robot_configs.clear()
        hw_sim.set_config(old_config)
        hw_sim.clean_up()


@pytest.mark.skipif(aionotify is None,
                    reason="requires inotify (linux only)")
@pytest.fixture
def sync_hardware(request, loop, virtual_smoothie_env, is_robot):
    thread_manager = ThreadManager(API.build_hardware_controller)
    hardware = thread_manager.sync
    try:
        yield hardware
    finally:
        hardware.reset()
        hardware.set_config(config.robot_configs.load())
        thread_manager.clean_up()


@pytest.fixture
def main_router(loop, virtual_smoothie_env, hardware):
    router = MainRouter(hardware=hardware, loop=loop, lock=ThreadedAsyncLock())
    router.wait_until = partial(
        wait_until,
        notifications=router.notifications,
        loop=loop)
    yield router


async def wait_until(matcher, notifications, timeout=1, loop=None):
    result = []
    for coro in iter(notifications.__anext__, None):
        done, pending = await asyncio.wait([coro], timeout=timeout)

        if pending:
            [task.cancel() for task in pending]
            raise TimeoutError('Notifications: {0}'.format(result))

        result += [done.pop().result()]

        if matcher(result[-1]):
            return result


def build_v2_model(h, lw_name, loop):
    ctx = ProtocolContext(loop=loop, hardware=h)

    loop.run_until_complete(h.cache_instruments(
        {Mount.RIGHT: 'p300_single'}))
    tiprack = ctx.load_labware(
        'opentrons_96_tiprack_300ul', '2')
    pip = ctx.load_instrument('p300_single', 'right',
                              tip_racks=[tiprack])
    instrument = models.Instrument(pip, context=ctx)
    plate = ctx.load_labware(
        lw_name or 'corning_96_wellplate_360ul_flat', 1)
    container = models.Container(plate, context=ctx)
    return namedtuple('model', 'robot instrument container')(
        robot=h,
        instrument=instrument,
        container=container,
    )


@pytest.fixture(params=[build_v2_model])
def model(request, hardware, loop):
    # Use with pytest.mark.parametrize(’labware’, [some-labware-name])
    # to have a different labware loaded as .container. If not passed,
    # defaults to the version-appropriate way to do 96 flat
    if request.node.get_closest_marker('api2_only')\
       and request.param != build_v2_model:
        pytest.skip('only works with hardware controller')
    try:
        lw_name = request.getfixturevalue('labware_name')
    except Exception:
        lw_name = None

    builder = request.param

    return builder(hardware, lw_name, loop)


@pytest.fixture
def smoothie(monkeypatch):
    from opentrons.drivers.smoothie_drivers.driver_3_0 import \
         SmoothieDriver_3_0_0 as SmoothieDriver
    from opentrons.config import robot_configs

    monkeypatch.setenv('ENABLE_VIRTUAL_SMOOTHIE', 'true')
    driver = SmoothieDriver(robot_configs.load())
    driver.connect()
    yield driver
    try:
        driver.disconnect()
    except AttributeError:
        # if the test disconnected
        pass
    monkeypatch.setenv('ENABLE_VIRTUAL_SMOOTHIE', 'false')


@pytest.fixture
def hardware_controller_lockfile():
    old_lockfile = config.CONFIG['hardware_controller_lockfile']
    with tempfile.TemporaryDirectory() as td:
        config.CONFIG['hardware_controller_lockfile']\
            = pathlib.Path(td)/'hardware.lock'
        yield td
        config.CONFIG['hardware_controller_lockfile'] = old_lockfile


@pytest.fixture
def running_on_pi():
    oldpi = config.IS_ROBOT
    config.IS_ROBOT = True
    yield
    config.IS_ROBOT = oldpi


@pytest.mark.skipif(not hc.Controller,
                    reason='hardware controller not available '
                           '(probably windows)')
@pytest.fixture
def cntrlr_mock_connect(monkeypatch):
    async def mock_connect(obj, port=None):
        return
    monkeypatch.setattr(hc.Controller, 'connect', mock_connect)
    monkeypatch.setattr(hc.Controller, 'fw_version', 'virtual')


@pytest.fixture
async def hardware_api(loop, is_robot):
    hw_api = await API.build_hardware_simulator(loop=loop)
    return hw_api


@pytest.fixture
def get_labware_fixture():
    def _get_labware_fixture(fixture_name):
        with open((pathlib.Path(__file__).parent/'..'/'..'/'..'/'shared-data' /
                   'labware' / 'fixtures'/'2'/f'{fixture_name}.json'), 'rb'
                  ) as f:
            return json.loads(f.read().decode('utf-8'))

    return _get_labware_fixture


@pytest.fixture
def get_json_protocol_fixture():
    def _get_json_protocol_fixture(fixture_version, fixture_name, decode=True):
        with open(pathlib.Path(__file__).parent /
                  '..'/'..'/'..'/'shared-data'/'protocol'/'fixtures' /
                  fixture_version/f'{fixture_name}.json', 'rb') as f:
            contents = f.read().decode('utf-8')
            if decode:
                return json.loads(contents)
            else:
                return contents

    return _get_json_protocol_fixture


@pytest.fixture
def get_module_fixture():
    def _get_module_fixture(fixture_name):
        with open(pathlib.Path(__file__).parent
                  / '..' / '..' / '..' / 'shared-data' / 'module' / 'fixtures'
                  / '2' / f'{fixture_name}.json', 'rb') as f:
            return json.loads(f.read().decode('utf-8'))
    return _get_module_fixture


@pytest.fixture
def get_bundle_fixture():
    def get_std_labware(loadName, version=1):
        with open(
            pathlib.Path(__file__).parent / '..' / '..' / '..' /
            'shared-data' / 'labware' / 'definitions' / '2' /
            loadName / f'{version}.json', 'rb'
        ) as f:
            labware_def = json.loads(f.read().decode('utf-8'))
        return labware_def

    def _get_bundle_protocol_fixture(fixture_name):
        """
        It's ugly to store bundles as .zip's, so we'll build the .zip
        from fixtures and return it as `bytes`.
        We also need to hard-code fixture data here (bundled_labware,
        bundled_python, bundled_data, metadata) for the tests to use in
        their assertions.
        """
        fixture_dir = (
            pathlib.Path(__file__).parent / 'protocols' /
            'fixtures' / 'bundled_protocols' / fixture_name)

        result = {'filename': f'{fixture_name}.zip',
                  'source_dir': fixture_dir}

        fixed_trash_def = get_std_labware('opentrons_1_trash_1100ml_fixed')

        empty_protocol = 'def run(context):\n    pass'

        if fixture_name == 'simple_bundle':
            with open(fixture_dir / 'protocol.py', 'r') as f:
                result['contents'] = f.read()
            with open(fixture_dir / 'data.txt', 'rb') as f:
                result['bundled_data'] = {'data.txt': f.read()}
            with open(fixture_dir / 'custom_labware.json', 'r') as f:
                custom_labware = json.load(f)

            tiprack_def = get_std_labware('opentrons_96_tiprack_10ul')
            result['bundled_labware'] = {
                'opentrons/opentrons_1_trash_1100ml_fixed/1': fixed_trash_def,
                'custom_beta/custom_labware/1': custom_labware,
                'opentrons/opentrons_96_tiprack_10ul/1': tiprack_def}
            result['bundled_python'] = {}

            # NOTE: this is copy-pasted from the .py fixture file
            result['metadata'] = {'author': 'MISTER FIXTURE',
                                  'apiLevel': '2.0'}

            # make binary zipfile
            binary_zipfile = io.BytesIO()
            with zipfile.ZipFile(binary_zipfile, 'w') as z:
                z.writestr('labware/custom_labware.json',
                           json.dumps(custom_labware))
                z.writestr('labware/tiprack.json', json.dumps(tiprack_def))
                z.writestr('labware/fixed_trash.json',
                           json.dumps(fixed_trash_def))
                z.writestr('protocol.ot2.py', result['contents'])
                z.writestr('data/data.txt',
                           result['bundled_data']['data.txt'])
            binary_zipfile.seek(0)
            result['binary_zipfile'] = binary_zipfile.read()
            binary_zipfile.seek(0)
            result['filelike'] = binary_zipfile

        elif fixture_name == 'no_root_files_bundle':
            binary_zipfile = io.BytesIO()
            with zipfile.ZipFile(binary_zipfile, 'w') as z:
                z.writestr('inner_dir/protocol.ot2.py', empty_protocol)
            binary_zipfile.seek(0)
            result['binary_zipfile'] = binary_zipfile.read()
            binary_zipfile.seek(0)
            result['filelike'] = binary_zipfile
        elif fixture_name == 'no_entrypoint_protocol_bundle':
            binary_zipfile = io.BytesIO()
            with zipfile.ZipFile(binary_zipfile, 'w') as z:
                z.writestr('rando_pyfile_name.py', empty_protocol)
            binary_zipfile.seek(0)
            result['binary_zipfile'] = binary_zipfile.read()
            binary_zipfile.seek(0)
            result['filelike'] = binary_zipfile
        elif fixture_name == 'conflicting_labware_bundle':
            binary_zipfile = io.BytesIO()
            with zipfile.ZipFile(binary_zipfile, 'w') as z:
                plate_def = get_std_labware('biorad_96_wellplate_200ul_pcr')
                z.writestr('protocol.ot2.py', empty_protocol)
                z.writestr(
                    'labware/fixed_trash.json', json.dumps(fixed_trash_def))
                z.writestr('labware/plate.json', json.dumps(plate_def))
                z.writestr('labware/same_plate.json', json.dumps(plate_def))
            binary_zipfile.seek(0)
            result['binary_zipfile'] = binary_zipfile.read()
            binary_zipfile.seek(0)
            result['filelike'] = binary_zipfile
        elif fixture_name == 'missing_labware_bundle':
            # parsing should fail b/c this bundle lacks labware defs.
            with open(fixture_dir / 'protocol.py', 'r') as f:
                protocol_contents = f.read()
            binary_zipfile = io.BytesIO()
            with zipfile.ZipFile(binary_zipfile, 'w') as z:
                z.writestr('protocol.ot2.py', protocol_contents)
            binary_zipfile.seek(0)
            result['binary_zipfile'] = binary_zipfile.read()
            binary_zipfile.seek(0)
            result['filelike'] = binary_zipfile
        else:
            raise ValueError(f'get_bundle_fixture has no case to handle '
                             f'fixture "{fixture_name}"')
        return result

    return _get_bundle_protocol_fixture


@pytest.fixture
def minimal_labware_def():
    return {
        "metadata": {
            "displayName": "minimal labware"
        },
        "cornerOffsetFromSlot": {
            "x": 10,
            "y": 10,
            "z": 5
        },
        "parameters": {
            "isTiprack": False,
            "loadName": "minimal_labware_def"
        },
        "ordering": [["A1"], ["A2"]],
        "wells": {
            "A1": {
              "depth": 40,
              "totalLiquidVolume": 100,
              "diameter": 30,
              "x": 0,
              "y": 0,
              "z": 0,
              "shape": "circular"
            },
            "A2": {
              "depth": 40,
              "totalLiquidVolume": 100,
              "diameter": 30,
              "x": 10,
              "y": 0,
              "z": 0,
              "shape": "circular"
            }
        },
        "dimensions": {
            "xDimension": 1.0,
            "yDimension": 2.0,
            "zDimension": 3.0
        }
    }


@pytest.fixture
def minimal_labware_def2():
    return {
        "metadata": {
            "displayName": "other test labware"
        },
        "cornerOffsetFromSlot": {
                "x": 10,
                "y": 10,
                "z": 5
        },
        "parameters": {
            "isTiprack": False,
            "loadName": "minimal_labware_def"
        },
        "ordering": [["A1", "B1", "C1"], ["A2", "B2", "C2"]],
        "wells": {
            "A1": {
              "depth": 40,
              "totalLiquidVolume": 100,
              "diameter": 30,
              "x": 0,
              "y": 18,
              "z": 0,
              "shape": "circular"
            },
            "B1": {
              "depth": 40,
              "totalLiquidVolume": 100,
              "diameter": 30,
              "x": 0,
              "y": 9,
              "z": 0,
              "shape": "circular"
            },
            "C1": {
              "depth": 40,
              "totalLiquidVolume": 100,
              "diameter": 30,
              "x": 0,
              "y": 0,
              "z": 0,
              "shape": "circular"
            },
            "A2": {
              "depth": 40,
              "totalLiquidVolume": 100,
              "diameter": 30,
              "x": 9,
              "y": 18,
              "z": 0,
              "shape": "circular"
            },
            "B2": {
              "depth": 40,
              "totalLiquidVolume": 100,
              "diameter": 30,
              "x": 9,
              "y": 9,
              "z": 0,
              "shape": "circular"
            },
            "C2": {
              "depth": 40,
              "totalLiquidVolume": 100,
              "diameter": 30,
              "x": 9,
              "y": 0,
              "z": 0,
              "shape": "circular"
            }
        },
        "dimensions": {
            "xDimension": 1.0,
            "yDimension": 2.0,
            "zDimension": 3.0
        }
    }


@pytest.fixture
def min_lw_impl(minimal_labware_def) -> LabwareImplementation:
    return LabwareImplementation(
            definition=minimal_labware_def,
            parent=Location(Point(0, 0, 0), 'deck')
    )


@pytest.fixture
def min_lw2_impl(minimal_labware_def2) -> LabwareImplementation:
    return LabwareImplementation(
        definition=minimal_labware_def2,
        parent=Location(Point(0, 0, 0), 'deck')
    )


@pytest.fixture
def min_lw(min_lw_impl) -> Labware:
    return Labware(implementation=min_lw_impl)


@pytest.fixture
def min_lw2(min_lw2_impl) -> Labware:
    return Labware(implementation=min_lw2_impl)
