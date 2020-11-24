from starlette import status
from fastapi import APIRouter

from opentrons.calibration_storage import (
    types as cal_types,
    get as get_cal,
    helpers,
    delete)

from robot_server.service.tip_length import models as tl_models
from robot_server.service.errors import RobotServerError, CommonErrorDef
from robot_server.service.json_api import ErrorResponse
from robot_server.service.shared_models import calibration as cal_model


router = APIRouter()


def _format_calibration(
    calibration: cal_types.TipLengthCalibration
) -> tl_models.TipLengthCalibration:
    status = cal_model.CalibrationStatus(
        **helpers.convert_to_dict(calibration.status))
    formatted_cal = tl_models.TipLengthCalibration(
        id=f'{calibration.tiprack}&{calibration.pipette}',
        tipLength=calibration.tip_length,
        tiprack=calibration.tiprack,
        pipette=calibration.pipette,
        lastModified=calibration.last_modified,
        source=calibration.source,
        status=status)

    return formatted_cal


@router.get(
    "/calibration/tip_length",
    description="Fetch all saved tip length calibrations from the robot",
    summary="Search the robot for any saved tip length calibration",
    response_model=tl_models.MultipleCalibrationsResponse)
async def get_all_tip_length_calibrations(
    tiprack_hash: str = None,
    pipette_id: str = None
) -> tl_models.MultipleCalibrationsResponse:
    all_calibrations = get_cal.get_all_tip_length_calibrations()

    if not all_calibrations:
        return tl_models.MultipleCalibrationsResponse(
            data=[_format_calibration(cal) for cal in all_calibrations]
        )

    if tiprack_hash:
        all_calibrations = list(filter(
            lambda cal: cal.tiprack == tiprack_hash, all_calibrations))
    if pipette_id:
        all_calibrations = list(filter(
            lambda cal: cal.pipette == pipette_id, all_calibrations))

    calibrations = [_format_calibration(cal) for cal in all_calibrations]
    return tl_models.MultipleCalibrationsResponse(data=calibrations)


@router.delete(
    "/calibration/tip_length",
    description="Delete one specific tip length calibration by pipette "
                "serial and tiprack hash",
    responses={status.HTTP_404_NOT_FOUND: {"model": ErrorResponse}})
async def delete_specific_tip_length_calibration(
        tiprack_hash: str, pipette_id: str):
    try:
        delete.delete_tip_length_calibration(tiprack_hash, pipette_id)
    except FileNotFoundError:
        raise RobotServerError(definition=CommonErrorDef.RESOURCE_NOT_FOUND,
                               resource='TipLengthCalibration',
                               id=f"{tiprack_hash}&{pipette_id}")
