import pytest

from pydantic import ValidationError
from starlette.status import HTTP_422_UNPROCESSABLE_ENTITY
from starlette.exceptions import HTTPException

from robot_server.service import errors
from tests.service.helpers import ItemRequest


def test_transform_validation_error_to_json_api_errors():
    with pytest.raises(ValidationError) as e:
        ItemRequest(**{
            'data': {}
        })
    assert errors.transform_validation_error_to_json_api_errors(
        HTTP_422_UNPROCESSABLE_ENTITY,
        e.value
    ).dict(exclude_unset=True) == {
        'errors': [
            {
                'status': str(HTTP_422_UNPROCESSABLE_ENTITY),
                'detail': 'field required',
                'source': {
                    'pointer': '/data/name'
                },
                'title': 'value_error.missing'
            },
            {
                'status': str(HTTP_422_UNPROCESSABLE_ENTITY),
                'detail': 'field required',
                'source': {
                    'pointer': '/data/quantity'
                },
                'title': 'value_error.missing'
            },
            {
                'status': str(HTTP_422_UNPROCESSABLE_ENTITY),
                'detail': 'field required',
                'source': {
                    'pointer': '/data/price'
                },
                'title': 'value_error.missing'
            },
        ]
    }


def test_transform_http_exception_to_json_api_errors():
    exc = HTTPException(status_code=404, detail="i failed")
    err = errors.transform_http_exception_to_json_api_errors(
        exc
    ).dict(
        exclude_unset=True
    )
    assert err == {
        'errors': [{
            'status': str(exc.status_code),
            'detail': exc.detail,
            'title': 'Bad Request',
        }]
    }


def test_build_unhandled_exception_response():
    exc = RuntimeError()
    err = errors.build_unhandled_exception_response(
        exc
    ).dict(
        exclude_unset=True
    )
    assert err == {
        'errors': [{'status': '500',
                    'detail': "Unhandled exception: <class 'RuntimeError'>",
                    'title': 'Internal Server Error'}]
    }
