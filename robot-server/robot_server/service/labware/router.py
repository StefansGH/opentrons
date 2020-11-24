from typing import List, Optional, Union

from starlette import status
from fastapi import APIRouter
from functools import partial


from opentrons.calibration_storage import (
    helpers,
    types as cal_types,
    get as get_cal,
    delete)

from robot_server.service.labware import models as lw_models
from robot_server.service.errors import RobotServerError, CommonErrorDef
from robot_server.service.json_api import ErrorResponse

router = APIRouter()


"""
These routes serve the current labware offsets on the robot to a client.
"""


def _format_calibrations(
        calibrations: List[cal_types.CalibrationInformation])\
        -> List[lw_models.LabwareCalibration]:
    formatted_calibrations = []
    for calInfo in calibrations:
        details = helpers.details_from_uri(calInfo.uri)
        lw_offset = calInfo.calibration.offset
        # TODO: Integrate datetime methods
        # to ensure that last_modified is the expected
        # value.
        # TODO(mc, 2020-09-17): lw_offset types do not match the types
        # expected by OffsetData
        offset = lw_models.OffsetData(
            value=lw_offset.value,  # type: ignore[arg-type]
            lastModified=lw_offset.last_modified)  # type: ignore[arg-type]

        tip_cal = calInfo.calibration.tip_length
        tip_length = lw_models.TipData(
            value=tip_cal.value,
            lastModified=tip_cal.last_modified)
        if calInfo.parent.module:
            parent_info = calInfo.parent.module
        else:
            parent_info = calInfo.parent.slot
        cal_data = lw_models.CalibrationData(
            offset=offset, tipLength=tip_length)
        formatted_cal = lw_models.LabwareCalibration(
            id=calInfo.labware_id,
            calibrationData=cal_data,
            loadName=details.load_name,
            namespace=details.namespace,
            version=details.version,
            parent=parent_info,
            definitionHash=calInfo.labware_id)
        formatted_calibrations.append(formatted_cal)
    return formatted_calibrations


def _grab_value(
        calibration: cal_types.CalibrationInformation,
        filtering: str,
        comparison: Union[str, int]) -> bool:
    """
    A filtering function to determine whether a particular
    calibration matches any of the following criteria:

    - Namespace of the calibration matches the namespace
    provided by the client.
    - Loadname of the calibration matches the loadname
    provided by the client.
    - Version of the calibration matches the version
    provided by the client.
    """
    details = helpers.details_from_uri(calibration.uri)
    if filtering == 'namespace':
        return details.namespace == comparison
    if filtering == 'loadname':
        return details.load_name == comparison
    if filtering == 'version':
        return details.version == comparison
    return False


def _check_parent(
        parentOpts: cal_types.ParentOptions,
        parent: str) -> bool:
    """
    A filtering function to check whether the parent provided
    by the client matches the parent provided by the client.
    """
    if parentOpts.module == parent:
        return True
    if parentOpts.slot == parent:
        return True
    return False


@router.get("/labware/calibrations",
            description="Fetch all saved labware calibrations from the robot",
            summary="Search the robot for any saved labware offsets"
                    "which allows you to check whether a particular"
                    "labware has been calibrated or not.",
            response_model=lw_models.MultipleCalibrationsResponse)
async def get_all_labware_calibrations(
        loadName: str = None,
        namespace: str = None,
        version: int = None,
        parent: str = None) -> lw_models.MultipleCalibrationsResponse:
    all_calibrations = get_cal.get_all_calibrations()

    if not all_calibrations:
        # TODO(mc, 2020-09-17): the type of all_calibrations does not match
        # what MultipleCalibrationsResponse expects for data
        return lw_models.MultipleCalibrationsResponse(
            data=all_calibrations  # type: ignore[arg-type]
        )

    if namespace:
        all_calibrations = list(filter(
            partial(_grab_value, filtering='namespace', comparison=namespace),
            all_calibrations))
    if loadName:
        all_calibrations = list(filter(
          partial(_grab_value, filtering='loadname', comparison=loadName),
          all_calibrations))
    if version:
        all_calibrations = list(filter(
          partial(_grab_value, filtering='version', comparison=version),
          all_calibrations))
    if parent:
        all_calibrations = list(filter(
          partial(_check_parent, parent=parent),
          all_calibrations))
    calibrations = _format_calibrations(all_calibrations)

    # TODO(mc, 2020-09-17): the type of all_calibrations does not match
    # what MultipleCalibrationsResponse expects for data
    return lw_models.MultipleCalibrationsResponse(
        data=calibrations  # type: ignore[arg-type]
    )


@router.get("/labware/calibrations/{calibrationId}",
            description="Fetch one specific labware offset by ID",
            response_model=lw_models.SingleCalibrationResponse,
            responses={status.HTTP_404_NOT_FOUND: {"model": ErrorResponse}})
async def get_specific_labware_calibration(
        calibrationId: str) -> lw_models.SingleCalibrationResponse:
    calibration: Optional[cal_types.CalibrationInformation] = None
    for cal in get_cal.get_all_calibrations():
        if calibrationId == cal.labware_id:
            calibration = cal
            break
    if not calibration:
        raise RobotServerError(definition=CommonErrorDef.RESOURCE_NOT_FOUND,
                               resource='calibration',
                               id=calibrationId)

    formatted_calibrations = _format_calibrations([calibration])
    # TODO(mc, 2020-09-17): type of formatted_calibrations[0] does not match
    # what SingleCalibrationResponse expects for data
    return lw_models.SingleCalibrationResponse(
        data=formatted_calibrations[0])  # type: ignore[arg-type]


@router.delete("/labware/calibrations/{calibrationId}",
               description="Delete one specific labware offset by ID",
               responses={
                   status.HTTP_404_NOT_FOUND: {"model": ErrorResponse}})
async def delete_specific_labware_calibration(
        calibrationId: cal_types.CalibrationID):
    try:
        delete.delete_offset_file(calibrationId)
    except (FileNotFoundError, KeyError):
        raise RobotServerError(definition=CommonErrorDef.RESOURCE_NOT_FOUND,
                               resource='calibration',
                               id=calibrationId)
