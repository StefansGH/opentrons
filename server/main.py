import logging
import json
import os
import sys
import threading

import flask
from flask import Flask, render_template, request
from flask_socketio import SocketIO
from flask_cors import CORS, cross_origin

from opentrons_sdk.robot import Robot
from opentrons_sdk.containers.placeable import Container

sys.path.insert(0, os.path.abspath('..'))
from server.helpers import get_frozen_root
from server.process_manager import run_once

class DictDiffer(object):
    """
    Calculate the difference between two dictionaries as:
    (1) items added
    (2) items removed
    (3) keys same in both but changed values
    (4) keys same in both and unchanged values
    """
    def __init__(self, current_dict, past_dict):
        self.current_dict, self.past_dict = current_dict, past_dict
        self.set_current, self.set_past = set(current_dict.keys()), set(past_dict.keys())
        self.intersect = self.set_current.intersection(self.set_past)
    def added(self):
        return self.set_current - self.intersect 
    def removed(self):
        return self.set_past - self.intersect 
    def changed(self):
        return set(o for o in self.intersect if self.past_dict[o] != self.current_dict[o])
    def unchanged(self):
        return set(o for o in self.intersect if self.past_dict[o] == self.current_dict[o])

TEMPLATES_FOLDER = os.path.join(get_frozen_root() or '', 'templates')
STATIC_FOLDER = os.path.join(get_frozen_root() or '', 'static')
BACKGROUND_TASKS = {}

app = Flask(__name__,
            static_folder=STATIC_FOLDER,
            template_folder=TEMPLATES_FOLDER
            )
CORS(app)
app.jinja_env.autoescape = False
# Only allow JSON and Python files
app.config['ALLOWED_EXTENSIONS'] = set(['json', 'py'])
socketio = SocketIO(app, async_mode='gevent')
robot = Robot.get_instance()

# welcome route for connecting to robot
@app.route("/")
def welcome():
    return render_template("index.html")

# Check uploaded file is allowed file type: JSON or Python
def allowed_file(filename):
    return '.' in filename and \
           filename.rsplit('.', 1)[1] in app.config['ALLOWED_EXTENSIONS']

def load_python(stream):
    code = ''.join([line.decode() for line in stream])
    global robot
    robot = robot.reset()
    exec(code, globals(), locals())
    robot.connect(options={'limit_switches':False})
    robot.run()

def load_json(stream):
    pass

@app.route("/upload", methods=["POST"])
def upload():
    file = request.files.get('file')
    if not file:
        return flask.jsonify({
            'status': 'error',
            'data': 'File expected'
        })

    extension = file.filename.split('.')[-1].lower()

    if extension == 'py':
        load_python(file.stream)
    elif extension == 'json':
        load_json(file.stream)
    else:
        return flask.jsonify({
            'status': 'error',
            'data': '{} is not a valid extension. Expected .py or .json'.format(extension)
        })


    # errors = lintProtocol(protocol_path, mimetype)
    # #create deepcopy, run on virtual smoothie w/
    # #fake calibration data, return any errors

    # if errors:
    #     data = errors
    # else:
    #     data = "No errors :)"

    return flask.jsonify({
            'status': 'success'
        })

def lintProtocol(protocol_path, filetype):
    from pylint import epylint as lint
    if filetype == "py":
        # this is where the virtual smoothie gets run w/ fake calibration data
        # this stuff beneath is for pylint
        config_file = os.path.join(os.getcwd(), "pylintrc")
        # command = '{0} --rcfile={1}'.format(protocol_path, config_file)
        # (pylint_stdout, pylint_stderr) = lint.py_run(command, return_std=True)
        # return(pylint_stdout.getvalue(), pylint_stderr.getvalue())
    elif filetype == "json":
        #lint, convert to python, lint again
        pass

@app.route('/dist/<path:filename>')
def script_loader(filename):
    root = get_frozen_root() or app.root_path
    scripts_root_path = os.path.join(root, 'templates', 'dist')
    return flask.send_from_directory(scripts_root_path, filename)


@app.route("/robot/serial/list")
def get_serial_ports_list():
    return flask.jsonify({
        'ports': Robot.get_instance().get_serial_ports_list()
    })


@app.route("/robot/serial/is_connected")
def is_connected():
    return flask.jsonify({
        'is_connected': Robot.get_instance().is_connected(),
        'port': Robot.get_instance().get_connected_port()
    })


@app.route("/robot/serial/connect")
def connect_robot():
    port = flask.request.args.get('port')

    status = 'success'
    data = None

    try:
        Robot.get_instance().connect(port)
    except Exception as e:
        status = 'error'
        data = str(e)

    connection_state_watcher, watcher_should_run = BACKGROUND_TASKS.get(
        'CONNECTION_STATE_WATCHER',
        (None, None)
    )

    if connection_state_watcher and watcher_should_run:
        watcher_should_run.set()

    watcher_should_run = threading.Event()
    def watch_connection_state(should_run):
        while not should_run.is_set():
            socketio.emit(
                'event',
                {'type': 'connection_status',
                 'is_connected': Robot.get_instance().is_connected()
                }
            )
            socketio.sleep(1.5)

    connection_state_watcher = socketio.start_background_task(
        watch_connection_state,
        (watcher_should_run)
    )
    BACKGROUND_TASKS['CONNECTION_STATE_WATCHER'] = (
        connection_state_watcher,
        watcher_should_run
    )

    return flask.jsonify({
        'status': status,
        'data': data
    })


@app.route("/robot/serial/disconnect")
def disconnect_robot():
    status = 'success'
    data = None

    try:
        Robot.get_instance().disconnect()
    except Exception as e:
        status = 'error'
        data = str(e)

    return flask.jsonify({
        'status': status,
        'data': data
    })

@app.route("/instruments/placeables")
def get_placeables():

    def get_containers(instrument):
        unique_containers = set()

        for placeable in instrument.placeables:
            containers = [c for c in placeable.get_trace() if isinstance(c, Container)]
            unique_containers.add(containers[0])
        return list(unique_containers)

    data = [{
        'axis': instrument.axis,
        'label': instrument.name,
        'top': instrument.positions['top'],
        'bottom': instrument.positions['bottom'],
        'blow_out': instrument.positions['blow_out'],
        'drop_tip': instrument.positions['drop_tip'],
        'max_volume': instrument.max_volume,
        'placeables': [
            {
                'type': placeable.properties['type'],
                'label': placeable.get_name(),
                'slot': placeable.get_parent().get_name(),
                'calibrated': False
            }
            for placeable in get_containers(instrument)
        ]
    } for _, instrument in Robot.get_instance().get_instruments()]

    return flask.jsonify({
        'status': 200,
        'data': data
    })

# NOTE(Ahmed): DO NOT REMOVE socketio requires a confirmation from the
# front end that a connection was established, this route does that.
@socketio.on('connected')
def on_connect():
    print('connected to front end...')


logging.basicConfig(
    level=logging.DEBUG,
    format='%(asctime)s %(levelname)-8s %(message)s',
    datefmt='%d-%m-%y %H:%M:%S'
)


if __name__ == "__main__":
    if len(sys.argv) > 1:
        data_dir = sys.argv[1]
    else:
        data_dir = os.getcwd()

    IS_DEBUG = os.environ.get('DEBUG', '').lower() == 'true'
    if not IS_DEBUG:
        run_once(data_dir)

    socketio.run(
        app,
        debug=IS_DEBUG,
        port=5000
    )
