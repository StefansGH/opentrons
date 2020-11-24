import json
import os

import pytest
import datetime
from opentrons import config
from unittest.mock import Mock
from opentrons.calibration_storage import (
    modify,
    get,
    helpers,
    delete,
    encoder_decoder as ed,
    types as cs_types)
from opentrons.protocol_api import labware
from opentrons.protocols.implementations.labware import LabwareImplementation
from opentrons.protocols.labware.definition import _get_labware_path
from opentrons.types import Point, Location
from opentrons.util.helpers import utc_now

MOCK_HASH = 'mock_hash'
PIPETTE_ID = 'pipette_id'

minimalLabwareDef = {
    "metadata": {
        "displayName": "minimal labware"
    },
    "cornerOffsetFromSlot": {
        "x": 10,
        "y": 10,
        "z": 5
    },
    "parameters": {
        "isTiprack": True,
        "tipLength": 55.3,
        "tipOverlap": 2.8,
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
    },
    "namespace": "opentrons",
    "version": 1
}


def path(calibration_name):
    return config.get_opentrons_path(
        'labware_calibration_offsets_dir_v2') \
        / '{}.json'.format(calibration_name)


def tlc_path(pip_id):
    return config.get_tip_length_cal_path() \
        / '{}.json'.format(pip_id)


def mock_hash_labware(labware_def):
    return MOCK_HASH


@pytest.fixture
def clear_calibration(monkeypatch):
    try:
        os.remove(path({MOCK_HASH}))
    except FileNotFoundError:
        pass
    yield
    try:
        os.remove(path(MOCK_HASH))
    except FileNotFoundError:
        pass


@pytest.fixture
def clear_tlc_calibration(monkeypatch):
    try:
        os.remove(tlc_path(PIPETTE_ID))
    except FileNotFoundError:
        pass
    yield
    try:
        os.remove(tlc_path('index'))
    except FileNotFoundError:
        pass


def test_save_labware_calibration(monkeypatch, clear_calibration):
    # Test the save calibration file
    assert not os.path.exists(path(MOCK_HASH))

    impl = LabwareImplementation(
        minimalLabwareDef,
        Location(Point(0, 0, 0), 'deck'))
    impl.set_calibration = Mock()

    monkeypatch.setattr(
        helpers,
        'hash_labware_def', mock_hash_labware
    )

    test_labware = labware.Labware(impl)

    point = Point(1, 1, 1)
    labware.save_calibration(test_labware, point)
    assert os.path.exists(path(MOCK_HASH))
    impl.set_calibration.assert_called_once_with(delta=point)


def test_json_datetime_encoder():
    fake_time = utc_now()
    original = {'mock_hash': {'tipLength': 25.0, 'lastModified': fake_time}}

    encoded = json.dumps(original, cls=ed.DateTimeEncoder)
    decoded = json.loads(encoded, cls=ed.DateTimeDecoder)
    assert decoded == original


def test_create_tip_length_calibration_data(monkeypatch):

    fake_time = utc_now()

    monkeypatch.setattr(modify, 'utc_now', lambda: fake_time)

    monkeypatch.setattr(
        helpers,
        'hash_labware_def', mock_hash_labware)

    tip_length = 22.0
    parent = ''
    expected_data = {
        MOCK_HASH: {
            'tipLength': tip_length,
            'lastModified': fake_time,
            'source': cs_types.SourceType.user,
            'status': {'markedBad': False},
        }
    }
    result = modify.create_tip_length_data(
        minimalLabwareDef, parent, tip_length)
    assert result == expected_data


def test_save_tip_length_calibration_data(monkeypatch, clear_tlc_calibration):
    assert not os.path.exists(tlc_path(PIPETTE_ID))

    test_data = {
        MOCK_HASH: {
            'tipLength': 22.0,
            'lastModified': 1
        }
    }
    modify.save_tip_length_calibration(PIPETTE_ID, test_data)
    assert os.path.exists(tlc_path(PIPETTE_ID))
    # test an index file is also created
    assert os.path.exists(tlc_path('index'))


def test_add_index_file(monkeypatch, clear_tlc_calibration):

    def get_result():
        with open(tlc_path('index')) as f:
            result = json.load(f)
        return result

    modify._append_to_index_tip_length_file('pip_1', 'lw_1')
    assert get_result() == {'lw_1': ['pip_1']}

    modify._append_to_index_tip_length_file('pip_2', 'lw_1')
    assert get_result() == {'lw_1': ['pip_1', 'pip_2']}

    modify._append_to_index_tip_length_file('pip_2', 'lw_2')
    assert get_result() == {'lw_1': ['pip_1', 'pip_2'], 'lw_2': ['pip_2']}


def test_load_nonexistent_tip_length_calibration_data(
        monkeypatch, clear_tlc_calibration):
    assert not os.path.exists(tlc_path(PIPETTE_ID))

    # file does not exist (FileNotFoundError)
    with pytest.raises(cs_types.TipLengthCalNotFound):
        get.load_tip_length_calibration(PIPETTE_ID, minimalLabwareDef, '')

    # labware hash not in calibration file (KeyError)
    calpath = config.get_tip_length_cal_path()
    with open(calpath / f'{PIPETTE_ID}.json', 'w') as offset_file:
        test_offset = {
            'FAKE_HASH': {
                'tipLength': 22.0,
                'lastModified': 1
            }
        }
        json.dump(test_offset, offset_file)
    with pytest.raises(cs_types.TipLengthCalNotFound):
        get.load_tip_length_calibration(PIPETTE_ID, minimalLabwareDef, '')


def test_load_tip_length_calibration_data(monkeypatch, clear_tlc_calibration):
    assert not os.path.exists(tlc_path(PIPETTE_ID))

    monkeypatch.setattr(
        helpers,
        'hash_labware_def', mock_hash_labware)

    tip_length = 22.0
    parent = ''
    test_data = modify.create_tip_length_data(
        minimalLabwareDef, parent, tip_length)
    modify.save_tip_length_calibration(PIPETTE_ID, test_data)
    result = get.load_tip_length_calibration(
        PIPETTE_ID, minimalLabwareDef, parent)
    expected = cs_types.TipLengthCalibration(
        tip_length=tip_length,
        pipette=PIPETTE_ID,
        source=cs_types.SourceType.user,
        status=cs_types.CalibrationStatus(markedBad=False),
        tiprack=MOCK_HASH,
        last_modified=test_data[MOCK_HASH]['lastModified']
    )
    assert result == expected


def test_clear_tip_length_calibration_data(monkeypatch):
    calpath = config.get_tip_length_cal_path()
    with open(calpath / f'{PIPETTE_ID}.json', 'w') as offset_file:
        test_offset = {
            MOCK_HASH: {
                'tipLength': 22.0,
                'lastModified': 1
            }
        }
        json.dump(test_offset, offset_file)

    assert len(os.listdir(calpath)) > 0
    delete.clear_tip_length_calibration()
    assert len(os.listdir(calpath)) == 0


def test_schema_shape(monkeypatch, clear_calibration):
    fake_time = utc_now()
    time_string = fake_time.isoformat()
    from_iso = datetime.datetime.fromisoformat(time_string)

    class fake_datetime:
        @classmethod
        def fromisoformat(cls, obj):
            return from_iso

        @classmethod
        def isoformat(cls):
            return time_string

    mock = Mock(spec=fake_datetime)
    mock.__class__ = datetime.datetime

    test_labware = labware.Labware(
        LabwareImplementation(minimalLabwareDef,
                              Location(Point(0, 0, 0), 'deck'))
    )

    monkeypatch.setattr(
        helpers,
        'hash_labware_def', mock_hash_labware
    )

    expected = {"default": {"offset": [1, 1, 1], "lastModified": fake_time}}

    def fake_helper_data(path, delta):
        return expected

    monkeypatch.setattr(
        modify,
        '_helper_offset_data_format',
        fake_helper_data
    )

    labware.save_calibration(test_labware, Point(1, 1, 1))
    with open(path(MOCK_HASH)) as f:
        result = json.load(f, cls=ed.DateTimeDecoder)
    assert result == expected


def test_load_calibration(monkeypatch, clear_calibration):

    monkeypatch.setattr(
        helpers,
        'hash_labware_def', mock_hash_labware
    )

    test_labware = labware.Labware(
        LabwareImplementation(
            minimalLabwareDef,
            Location(Point(0, 0, 0), 'deck')
        )
    )

    test_offset = Point(1, 1, 1)

    labware.save_calibration(test_labware, test_offset)

    # Set without saving to show that load will update with previously saved
    # data
    test_labware.set_calibration(Point(0, 0, 0))
    test_labware.tip_length = 46.8
    lookup_path = _get_labware_path(test_labware._implementation)
    calibration_point = get.get_labware_calibration(
        lookup_path,
        test_labware._implementation.get_definition()
    )
    assert calibration_point == test_offset


def test_wells_rebuilt_with_offset():
    test_labware = labware.Labware(
        implementation=LabwareImplementation(
            minimalLabwareDef,
            Location(Point(0, 0, 0), 'deck')
        )
    )
    old_wells = test_labware.wells()
    assert test_labware._implementation.get_geometry().offset ==\
        Point(10, 10, 5)
    assert test_labware._implementation.get_calibrated_offset() ==\
        Point(10, 10, 5)
    labware.save_calibration(test_labware, Point(2, 2, 2))
    new_wells = test_labware.wells()
    assert old_wells[0] != new_wells[0]
    assert test_labware._implementation.get_geometry().offset ==\
        Point(10, 10, 5)
    assert test_labware._implementation.get_calibrated_offset() ==\
        Point(12, 12, 7)


def test_clear_calibrations():
    calpath = config.get_opentrons_path('labware_calibration_offsets_dir_v2')
    with open(calpath / '1.json', 'w') as offset_file:
        test_offset = {
            "default": {
                "offset": [1, 2, 3],
                "lastModified": 1
            },
            "tipLength": 1.2
        }
        json.dump(test_offset, offset_file)

    assert len(os.listdir(calpath)) > 0
    delete.clear_calibrations()
    assert len(os.listdir(calpath)) == 0


def testhash_labware_def():
    def1a = {"metadata": {"a": 123}, "importantStuff": [1.1, 0.00003, 1 / 3]}
    def1aa = {"metadata": {"a": 123}, "importantStuff": [1.1, 0.00003, 1 / 3]}
    def1b = {"metadata": {"a": "blah"}, "importantStuff": [1.1, 0.00003, 1 / 3]}
    def2 = {"metadata": {"a": 123}, "importantStuff": [1.1, 0.000033, 1 / 3]}

    # identity preserved across json serialization+deserialization
    assert helpers.hash_labware_def(def1a) == \
        helpers.hash_labware_def(
            json.loads(json.dumps(def1a, separators=(',', ':'))))
    # 2 instances of same def should match
    assert helpers.hash_labware_def(def1a) == \
        helpers.hash_labware_def(def1aa)
    # metadata ignored
    assert helpers.hash_labware_def(def1a) == helpers.hash_labware_def(def1b)
    # different data should not match
    assert helpers.hash_labware_def(def1a) != helpers.hash_labware_def(def2)
