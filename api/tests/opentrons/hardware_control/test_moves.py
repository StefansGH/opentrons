from unittest import mock
import pytest
from opentrons import types
from opentrons import hardware_control as hc
from opentrons.calibration_storage.types import (
    DeckCalibration, SourceType, CalibrationStatus)
from opentrons.hardware_control.types import (
    Axis, CriticalPoint, OutOfBoundsMove, MotionChecks)
from opentrons.hardware_control.robot_calibration import RobotCalibration


async def test_controller_musthome(hardware_api):
    abs_position = types.Point(30, 20, 10)
    mount = types.Mount.RIGHT
    home = mock.Mock()
    home.side_effect = hardware_api.home
    await hardware_api.move_to(mount, abs_position)
    assert home.called_once()


async def test_home_specific_sim(hardware_api, monkeypatch, is_robot):
    await hardware_api.home()
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 10, 20))
    # Avoid the autoretract when moving two difference instruments
    hardware_api._last_moved_mount = None
    await hardware_api.move_rel(types.Mount.LEFT, types.Point(0, 0, -20))
    await hardware_api.home([Axis.Z, Axis.C])
    assert hardware_api._current_position == {Axis.X: 0,
                                              Axis.Y: 10,
                                              Axis.Z: 218,
                                              Axis.A: 20,
                                              Axis.B: 19,
                                              Axis.C: 19}


async def test_retract(hardware_api, toggle_new_calibration):
    await hardware_api.home()
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 10, 20))
    await hardware_api.retract(types.Mount.RIGHT, 10)
    assert hardware_api._current_position == {Axis.X: 0,
                                              Axis.Y: 10,
                                              Axis.Z: 218,
                                              Axis.A: 218,
                                              Axis.B: 19,
                                              Axis.C: 19}


async def test_move(hardware_api, is_robot, toggle_new_calibration):
    abs_position = types.Point(30, 20, 10)
    mount = types.Mount.RIGHT
    target_position1 = {Axis.X: 30,
                        Axis.Y: 20,
                        Axis.Z: 218,
                        Axis.A: 10,
                        Axis.B: 19,
                        Axis.C: 19}
    await hardware_api.home()
    await hardware_api.move_to(mount, abs_position)
    assert hardware_api._current_position == target_position1

    # This assert implicitly checks that the mount offset is not applied to
    # relative moves; if you change this to move_to, the offset will be
    # applied again
    rel_position = types.Point(30, 20, -10)
    mount2 = types.Mount.LEFT
    target_position2 = {Axis.X: 60,
                        Axis.Y: 40,
                        Axis.Z: 208,
                        Axis.A: 218,  # The other instrument is retracted
                        Axis.B: 19,
                        Axis.C: 19}
    await hardware_api.move_rel(mount2, rel_position)
    assert hardware_api._current_position == target_position2


async def test_move_extras_passed_through(hardware_api, monkeypatch):
    mock_be_move = mock.Mock()
    monkeypatch.setattr(hardware_api._backend, 'move', mock_be_move)
    await hardware_api.home()
    await hardware_api.move_to(types.Mount.RIGHT,
                               types.Point(0, 0, 0))
    assert mock_be_move.call_args_list[0][1]['speed'] is None
    assert mock_be_move.call_args_list[0][1]['axis_max_speeds'] == {}
    mock_be_move.reset_mock()
    await hardware_api.move_to(types.Mount.RIGHT,
                               types.Point(1, 1, 1),
                               speed=30,
                               max_speeds={Axis.X: 10})
    assert mock_be_move.call_args_list[0][1]['speed'] == 30
    assert mock_be_move.call_args_list[0][1]['axis_max_speeds'] == {'X': 10}
    mock_be_move.reset_mock()
    await hardware_api.move_rel(types.Mount.LEFT,
                                types.Point(1, 1, 1),
                                speed=40,
                                max_speeds={Axis.Y: 20})
    assert mock_be_move.call_args_list[0][1]['speed'] == 40
    assert mock_be_move.call_args_list[0][1]['axis_max_speeds'] == {'Y': 20}


async def test_mount_offset_applied(
        hardware_api, is_robot, toggle_new_calibration):
    await hardware_api.home()
    abs_position = types.Point(30, 20, 10)
    mount = types.Mount.LEFT
    target_position = {Axis.X: 64,
                       Axis.Y: 20,
                       Axis.Z: 10,
                       Axis.A: 218,
                       Axis.B: 19,
                       Axis.C: 19}
    await hardware_api.move_to(mount, abs_position)
    assert hardware_api._current_position == target_position


async def test_critical_point_applied(hardware_api, monkeypatch, is_robot):
    await hardware_api.home()
    hardware_api._backend._attached_instruments\
        = {types.Mount.LEFT: {'model': None, 'id': None},
           types.Mount.RIGHT: {'model': 'p10_single_v1', 'id': 'testyness'}}
    await hardware_api.cache_instruments()
    # Our critical point is now the tip of the nozzle
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0))
    target_no_offset = {Axis.X: 0,
                        Axis.Y: 0,
                        Axis.Z: 218,
                        Axis.A: -12,  # from pipette-config.json nozzle offset
                        Axis.B: 19,
                        Axis.C: 19}
    assert hardware_api._current_position == target_no_offset
    target = {Axis.X: 0,
              Axis.Y: 0,
              Axis.A: 0,
              Axis.C: 19}
    assert await hardware_api.current_position(types.Mount.RIGHT) == target
    p10_tip_length = 33
    # Specifiying critical point overrides as mount should not use nozzle
    # offset
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0),
                               critical_point=CriticalPoint.MOUNT)
    assert hardware_api._current_position == {Axis.X: 0.0, Axis.Y: 0.0,
                                              Axis.Z: 218,
                                              Axis.A: 0,
                                              Axis.B: 19, Axis.C: 19}
    assert await hardware_api.current_position(
        types.Mount.RIGHT, critical_point=CriticalPoint.MOUNT)\
        == {Axis.X: 0.0, Axis.Y: 0.0, Axis.A: 0, Axis.C: 19}
    # Specifying the critical point as nozzle should have the same behavior
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0),
                               critical_point=CriticalPoint.NOZZLE)
    assert hardware_api._current_position == target_no_offset
    await hardware_api.pick_up_tip(types.Mount.RIGHT, p10_tip_length)
    # Now the current position (with offset applied) should change
    # pos_after_pickup + model_offset + critical point
    target[Axis.A] = 218 + 12 + (-1 * p10_tip_length)
    target_no_offset[Axis.C] = target[Axis.C] = 2
    assert await hardware_api.current_position(types.Mount.RIGHT) == target
    # This move should take the new critical point into account
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0))
    target_no_offset[Axis.A] = 21
    assert hardware_api._current_position == target_no_offset
    # But the position with offset should be back to the original
    target[Axis.A] = 0
    assert await hardware_api.current_position(types.Mount.RIGHT) == target
    # And removing the tip should move us back to the original
    await hardware_api.move_rel(types.Mount.RIGHT, types.Point(2.5, 0, 0))
    await hardware_api.drop_tip(types.Mount.RIGHT)
    await hardware_api.home_plunger(types.Mount.RIGHT)
    target[Axis.A] = 33 + hc.DROP_TIP_RELEASE_DISTANCE
    target_no_offset[Axis.X] = 2.5
    target[Axis.X] = 2.5
    assert await hardware_api.current_position(types.Mount.RIGHT) == target
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0))
    target[Axis.X] = 0
    target_no_offset[Axis.X] = 0
    target_no_offset[Axis.A] = -12
    target[Axis.A] = 0
    assert hardware_api._current_position == target_no_offset
    assert await hardware_api.current_position(types.Mount.RIGHT) == target


async def test_new_critical_point_applied(
        hardware_api, monkeypatch, is_robot, use_new_calibration):
    await hardware_api.home()
    hardware_api._backend._attached_instruments\
        = {types.Mount.LEFT: {'model': None, 'id': None},
           types.Mount.RIGHT: {'model': 'p10_single_v1', 'id': 'testyness'}}
    await hardware_api.cache_instruments()
    # Our critical point is now the tip of the nozzle
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0))
    target_no_offset = {Axis.X: 0,
                        Axis.Y: 0,
                        Axis.Z: 218,
                        Axis.A: -12,  # from pipette-config.json model offset
                        Axis.B: 19,
                        Axis.C: 19}
    assert hardware_api._current_position == target_no_offset
    target = {Axis.X: 0,
              Axis.Y: 0,
              Axis.A: 0,
              Axis.C: 19}
    assert await hardware_api.current_position(types.Mount.RIGHT) == target
    p10_tip_length = 33
    # Specifiying critical point overrides as mount should not use model offset
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0),
                               critical_point=CriticalPoint.MOUNT)
    assert hardware_api._current_position == {Axis.X: 0.0, Axis.Y: 0.0,
                                              Axis.Z: 218,
                                              Axis.A: 0,
                                              Axis.B: 19, Axis.C: 19}
    assert await hardware_api.current_position(
        types.Mount.RIGHT, critical_point=CriticalPoint.MOUNT)\
        == {Axis.X: 0.0, Axis.Y: 0.0, Axis.A: 0, Axis.C: 19}
    # Specifying the critical point as nozzle should have the same behavior
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0),
                               critical_point=CriticalPoint.NOZZLE)
    assert hardware_api._current_position == target_no_offset
    await hardware_api.pick_up_tip(types.Mount.RIGHT, p10_tip_length)
    # Now the current position (with offset applied) should change
    # pos_after_pickup + model_offset + critical point
    target[Axis.A] = 218 + (12) + (-1 * p10_tip_length)
    target_no_offset[Axis.C] = target[Axis.C] = 2
    assert await hardware_api.current_position(types.Mount.RIGHT) == target
    # This move should take the new critical point into account
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0))
    target_no_offset[Axis.A] = 21
    assert hardware_api._current_position == target_no_offset
    # But the position with offset should be back to the original
    target[Axis.A] = 0
    assert await hardware_api.current_position(types.Mount.RIGHT) == target
    # And removing the tip should move us back to the original
    await hardware_api.move_rel(types.Mount.RIGHT, types.Point(2.5, 0, 0))
    await hardware_api.drop_tip(types.Mount.RIGHT)
    await hardware_api.home_plunger(types.Mount.RIGHT)
    target[Axis.A] = 33 + hc.DROP_TIP_RELEASE_DISTANCE
    target_no_offset[Axis.X] = 2.5
    target[Axis.X] = 2.5
    assert await hardware_api.current_position(types.Mount.RIGHT) == target
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0))
    target[Axis.X] = 0
    target_no_offset[Axis.X] = 0
    target_no_offset[Axis.A] = -12
    target[Axis.A] = 0
    assert hardware_api._current_position == target_no_offset
    assert await hardware_api.current_position(types.Mount.RIGHT) == target


async def test_attitude_deck_cal_applied(
        monkeypatch, loop, use_new_calibration):
    new_gantry_cal = [
        [1.0047, -0.0046, 0.0],
        [0.0011, 1.0038, 0.0],
        [0.0, 0.0, 1.0]]
    called_with = None

    def mock_move(position, speed=None, home_flagged_axes=True,
                  axis_max_speeds=None):
        nonlocal called_with
        called_with = position

    hardware_api = await hc.API.build_hardware_simulator(loop=loop)
    monkeypatch.setattr(hardware_api._backend, 'move', mock_move)
    deck_cal = RobotCalibration(
        deck_calibration=DeckCalibration(
            attitude=new_gantry_cal,
            source=SourceType.user,
            status=CalibrationStatus()))
    hardware_api.set_robot_calibration(deck_cal)
    await hardware_api.home()
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0))
    assert called_with['X'] == 0.0
    assert called_with['Y'] == 0.0
    assert called_with['A'] == 0.0
    # Check that mount offset is also applied
    await hardware_api.move_to(types.Mount.LEFT, types.Point(0, 0, 0))
    assert round(called_with['X'], 2) == 34.16
    assert round(called_with['Y'], 2) == 0.04
    assert round(called_with['Z'], 2) == 0.0


async def test_other_mount_retracted(
        hardware_api, is_robot, toggle_new_calibration):
    await hardware_api.home()
    await hardware_api.move_to(types.Mount.RIGHT, types.Point(0, 0, 0))
    assert await hardware_api.gantry_position(types.Mount.RIGHT)\
        == types.Point(0, 0, 0)
    await hardware_api.move_to(types.Mount.LEFT, types.Point(20, 20, 0))
    assert await hardware_api.gantry_position(types.Mount.RIGHT) \
        == types.Point(54, 20, 218)


async def test_shake_during_pick_up(
        hardware_api, monkeypatch, toggle_new_calibration):
    await hardware_api.home()
    hardware_api._backend._attached_instruments\
        = {types.Mount.LEFT: {'model': None, 'id': None},
           types.Mount.RIGHT: {'model': 'p1000_single_v2.0',
                               'id': 'testyness'}}
    await hardware_api.cache_instruments()

    shake_tips_pick_up = mock.Mock(
        side_effect=hardware_api._shake_off_tips_pick_up)
    monkeypatch.setattr(hardware_api, '_shake_off_tips_pick_up',
                        shake_tips_pick_up)

    # Test double shake for after pick up tips
    await hardware_api.pick_up_tip(types.Mount.RIGHT, 50)
    shake_tip_calls = [mock.call(types.Mount.RIGHT),
                       mock.call(types.Mount.RIGHT)]
    shake_tips_pick_up.assert_has_calls(shake_tip_calls)

    move_rel = mock.Mock(side_effect=hardware_api.move_rel)
    monkeypatch.setattr(hardware_api, 'move_rel', move_rel)

    # Test shakes in X and Y direction with 0.3 mm shake tip distance
    shake_tips_pick_up.reset_mock()
    await shake_tips_pick_up(types.Mount.RIGHT)
    move_rel_calls = [
        mock.call(types.Mount.RIGHT, types.Point(-0.3, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(0.6, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(-0.3, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(0, -0.3, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(0, 0.6, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(0, -0.3, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(0, 0, 20))]
    move_rel.assert_has_calls(move_rel_calls)


async def test_shake_during_drop(
        hardware_api, monkeypatch, toggle_new_calibration):
    await hardware_api.home()
    hardware_api._backend._attached_instruments\
        = {types.Mount.LEFT: {'model': None, 'id': None},
           types.Mount.RIGHT: {'model': 'p1000_single_v1.5',
                               'id': 'testyness'}}
    await hardware_api.cache_instruments()
    await hardware_api.add_tip(types.Mount.RIGHT, 50.0)
    hardware_api.set_current_tiprack_diameter(types.Mount.RIGHT, 30.0)

    shake_tips_drop = mock.Mock(
        side_effect=hardware_api._shake_off_tips_drop)
    monkeypatch.setattr(hardware_api, '_shake_off_tips_drop',
                        shake_tips_drop)

    # Test single shake after drop tip
    await hardware_api.drop_tip(types.Mount.RIGHT)
    shake_tips_drop.assert_called_once_with(types.Mount.RIGHT, 30)

    move_rel = mock.Mock(side_effect=hardware_api.move_rel)
    monkeypatch.setattr(hardware_api, 'move_rel', move_rel)

    # Test drop tip shake with 25% of tiprack well diameter
    # between upper (2.25 mm) and lower limit (1.0 mm)
    shake_tips_drop.reset_mock()
    await shake_tips_drop(types.Mount.RIGHT, 2.0*4)
    move_rel_calls = [
        mock.call(types.Mount.RIGHT, types.Point(-2, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(4, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(-2, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(0, 0, 20))]
    move_rel.assert_has_calls(move_rel_calls)

    # Test drop tip shake with 25% of tiprack well diameter
    # over upper (2.25 mm) limit
    shake_tips_drop.reset_mock()
    await shake_tips_drop(types.Mount.RIGHT, 2.3*4)
    move_rel_calls = [
        mock.call(types.Mount.RIGHT, types.Point(-2.25, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(4.5, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(-2.25, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(0, 0, 20))]
    move_rel.assert_has_calls(move_rel_calls)

    # Test drop tip shake with 25% of tiprack well diameter
    # below lower (1.0 mm) limit
    shake_tips_drop.reset_mock()
    await shake_tips_drop(types.Mount.RIGHT, 0.9*4)
    move_rel_calls = [
        mock.call(types.Mount.RIGHT, types.Point(-1, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(2, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(-1, 0, 0), speed=50),
        mock.call(types.Mount.RIGHT, types.Point(0, 0, 20))]
    move_rel.assert_has_calls(move_rel_calls)


async def test_move_rel_bounds(
        hardware_api, toggle_new_calibration):
    with pytest.raises(OutOfBoundsMove):
        await hardware_api.move_rel(
            types.Mount.RIGHT, types.Point(0, 0, 2000),
            check_bounds=MotionChecks.HIGH)
