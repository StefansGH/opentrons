import pytest
from unittest.mock import patch
from datetime import datetime, timezone
from robot_server.system import time, errors


@pytest.fixture
def mock_system_time():
    return datetime(2020, 8, 14, 21, 44, 16, tzinfo=timezone.utc)


@pytest.fixture
def mock_set_system_time(mock_system_time):
    with patch.object(time, 'set_system_time') as p:
        yield p


@pytest.fixture
def response_links():
    return {
        'self': {
            'href': '/system/time', 'meta': None,
        }
    }


def test_raise_system_synchronized_error(api_client,
                                         mock_system_time,
                                         mock_set_system_time):
    mock_set_system_time.side_effect = errors.SystemTimeAlreadySynchronized(
        'Cannot set system time; already synchronized with NTP or RTC')

    response = api_client.put("/system/time", json={
        "data": {
            "id": "time",
            "systemTime": mock_system_time.isoformat()
        }
    })
    assert response.json() == {'errors': [{
        'detail': 'Cannot set system time; already synchronized with NTP '
                  'or RTC',
        'status': '403',
        'title': 'Action Forbidden'}]}
    assert response.status_code == 403


def test_raise_system_exception(api_client,
                                mock_system_time,
                                mock_set_system_time):
    mock_set_system_time.side_effect = errors.SystemSetTimeException(
        'Something went wrong')

    response = api_client.put("/system/time", json={
        "data": {
            "id": "time",
            "systemTime": mock_system_time.isoformat()
        }
    })
    assert response.json() == {'errors': [{
        'detail': 'Something went wrong',
        'status': '500',
        'title': 'Internal Server Error'}]}
    assert response.status_code == 500


def test_set_system_time(api_client, mock_system_time,
                         mock_set_system_time, response_links):
    async def mock_side_effect(*args, **kwargs):
        return mock_system_time

    mock_set_system_time.side_effect = mock_side_effect

    # Correct request
    response = api_client.put("/system/time",
                              json={
                                  'data': {
                                      'systemTime':
                                          mock_system_time.isoformat(),
                                      'id': 'time',
                                  },
                              })
    assert response.json() == {
        'data': {
            'systemTime': mock_system_time.isoformat(),
            'id': 'time'
        },
        'links': response_links,
    }
    assert response.status_code == 200
