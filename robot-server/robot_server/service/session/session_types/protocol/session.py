import logging
from typing import cast

from opentrons.config.feature_flags import enable_http_protocol_sessions

from robot_server.service.session.errors import UnsupportedFeature, \
    SessionCreationException
from robot_server.service.session.models.session import SessionType, \
    ProtocolResponseAttributes
from robot_server.service.session.session_types import BaseSession, \
    SessionMetaData
from robot_server.service.session.command_execution import CommandQueue,\
    CommandExecutor
from robot_server.service.session.configuration import SessionConfiguration
from robot_server.service.protocol.protocol import UploadedProtocol
from robot_server.service.session.session_types.protocol.execution.\
    command_executor import ProtocolCommandExecutor
from robot_server.service.session.session_types.protocol.models import \
    ProtocolSessionDetails, ProtocolCreateParams

log = logging.getLogger(__name__)


class ProtocolSession(BaseSession):

    def __init__(self,
                 configuration: SessionConfiguration,
                 instance_meta: SessionMetaData,
                 protocol: UploadedProtocol):
        """Constructor"""
        super().__init__(configuration, instance_meta)
        self._uploaded_protocol = protocol
        self._command_executor = ProtocolCommandExecutor(
            protocol=self._uploaded_protocol,
            configuration=configuration
        )

    @classmethod
    async def create(cls, configuration: SessionConfiguration,
                     instance_meta: SessionMetaData) -> 'BaseSession':
        """Try to create the protocol session"""
        if not enable_http_protocol_sessions():
            raise SessionCreationException(
                "HTTP Protocol Session feature is disabled")

        protocol = configuration.protocol_manager.get(
            cast(
                ProtocolCreateParams,
                instance_meta.create_params).protocolId
        )
        return cls(configuration, instance_meta, protocol)

    def get_response_model(self) -> ProtocolResponseAttributes:
        return ProtocolResponseAttributes(
            id=self.meta.identifier,
            createParams=cast(ProtocolCreateParams, self.meta.create_params),
            createdAt=self.meta.created_at,
            details=ProtocolSessionDetails(
                protocolId=self._uploaded_protocol.meta.identifier,
                currentState=self._command_executor.current_state,
                events=self._command_executor.events
            )
        )

    @property
    def command_executor(self) -> CommandExecutor:
        return self._command_executor

    @property
    def command_queue(self) -> CommandQueue:
        raise UnsupportedFeature()

    @property
    def session_type(self) -> SessionType:
        return SessionType.protocol

    async def clean_up(self):
        return await self._command_executor.clean_up()
