import logging
from datetime import datetime
from fastapi import APIRouter

from robot_server.service.json_api.resource_links import (
    ResourceLinkKey, ResourceLink)
from robot_server.system import time
from robot_server.service.system import models as time_models

router = APIRouter()
log = logging.getLogger(__name__)

"""
These routes allows the client to read & update robot system time
"""


def _create_response(dt: datetime) \
        -> time_models.SystemTimeResponse:
    """Create a SystemTimeResponse with system datetime"""
    return time_models.SystemTimeResponse(
        data=time_models.SystemTimeAttributesResponse(
                systemTime=dt,
                id="time"
        ),
        links={
            ResourceLinkKey.self: ResourceLink(href='/system/time')
        }
    )


@router.get("/system/time",
            description="Fetch system time & date",
            summary="Get robot's time status, which includes- current UTC "
                    "date & time, local timezone, whether robot time is synced"
                    " with an NTP server &/or it has an active RTC.",
            response_model=time_models.SystemTimeResponse
            )
async def get_time() -> time_models.SystemTimeResponse:
    res = await time.get_system_time()
    return _create_response(res)


@router.put("/system/time",
            description="Update system time",
            summary="Set robot time",
            response_model=time_models.SystemTimeResponse)
async def set_time(new_time: time_models.SystemTimeRequest) \
        -> time_models.SystemTimeResponse:
    sys_time = await time.set_system_time(new_time.data.systemTime)
    return _create_response(sys_time)
