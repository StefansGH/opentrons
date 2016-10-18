import unittest
import json
import os
import subprocess
import time
from pprint import pprint

from opentrons_sdk.robot import Robot


class UploadTestCase(unittest.TestCase):
    def setUp(self):
        from main import app
        self.app = app.test_client()

        self.data_path = os.path.join(
            os.path.dirname(__file__) + '/data/'
        )

        self.robot = Robot.get_instance()

    def test_upload_valid_python(self):
        response = self.app.post('/upload', data={
            'file': (open(self.data_path + 'protocol.py', 'rb'), 'protocol.py')
            })

        status = json.loads(response.data.decode())['status']
        self.assertEqual(status, 'success')

    def test_get_instrument_placeables(self):
        response = self.app.post('/upload', data={
            'file': (open(self.data_path + 'protocol.py', 'rb'), 'protocol.py')
            })
        status = json.loads(response.data.decode())['status']
        self.assertEqual(status, 'success')

        response = self.app.get('/instruments/placeables')
        response = json.loads(response.data.decode())

        expected_data = {
            'data': [
                {
                    'axis': 'b',
                    'blow_out': 12,
                    'bottom': 10,
                    'drop_tip': 13,
                    'label': 'p200',
                    'max_volume': 200,
                    'placeables': [
                        {
                            'calibrated': False,
                            'label': 'tiprack',
                            'slot': 'A1',
                            'type': 'tiprack-200ul'
                        },
                        {
                            'calibrated': False,
                            'label': 'trough',
                            'slot': 'B1',
                            'type': 'trough-12row'
                        },
                        {
                            'calibrated': False,
                            'label': 'plate',
                            'slot': 'B2',
                            'type': '96-flat'
                        },
                        {
                            'calibrated': False,
                            'label': 'trash',
                            'slot': 'A2',
                            'type': 'point'
                        }
                    ],
                    'top': 0}
                ],
            'status': 200
        }

        self.assertEquals(response['status'], 200)

        response_data = response['data'][0]
        for key, value in expected_data['data'][0].items():
            if key != 'placeables':
                self.assertEquals(value, response_data[key])
            else:
                for placeable in value:
                    self.assertTrue(placeable in response_data['placeables'])


    def test_upload_invalid_python(self):
        pass

    def test_upload_valid_json(self):
        pass

    def test_upload_invalid_json(self):
        pass

