// @flow
// RobotSettings card for robot status
import * as React from 'react'
import cx from 'classnames'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'

import {
  Card,
  Flex,
  Box,
  LabeledValue,
  SecondaryBtn,
  Tooltip,
  useInterval,
  useHoverTooltip,
  ALIGN_FLEX_START,
  FLEX_NONE,
  SPACING_AUTO,
  SPACING_3,
} from '@opentrons/components'

import { getBuildrootUpdateDisplayInfo } from '../../buildroot'
import { checkShellUpdate } from '../../shell'
import {
  getRobotApiVersion,
  getRobotFirmwareVersion,
  getRobotProtocolApiVersion,
} from '../../discovery'

import type { State, Dispatch } from '../../types'
import type { ViewableRobot } from '../../discovery/types'

export type InformationCardProps = {|
  robot: ViewableRobot,
  updateUrl: string,
|}

const TITLE = 'Information'
const NAME_LABEL = 'Robot name'
const SERVER_VERSION_LABEL = 'Server version'
const FIRMWARE_VERSION_LABEL = 'Firmware version'
const BOTH_PROTOCOL_API_VERSIONS_LABEL = 'Supported Protocol API Versions'
const UNKNOWN = 'Unknown'

const UPDATE_RECHECK_DELAY_MS = 60000

export function InformationCard(props: InformationCardProps): React.Node {
  const { robot, updateUrl } = props
  const [updateBtnProps, updateBtnTooltipProps] = useHoverTooltip()
  const { autoUpdateAction, autoUpdateDisabledReason } = useSelector(
    (state: State) => {
      return getBuildrootUpdateDisplayInfo(state, robot.name)
    }
  )

  const dispatch = useDispatch<Dispatch>()
  const checkAppUpdate = React.useCallback(() => dispatch(checkShellUpdate()), [
    dispatch,
  ])

  const { displayName } = robot
  const version = getRobotApiVersion(robot)
  const firmwareVersion = getRobotFirmwareVersion(robot)
  const protocolApiVersions = getRobotProtocolApiVersion(robot)
  const minProtocolApiVersion = protocolApiVersions?.min ?? UNKNOWN
  const maxProtocolApiVersion = protocolApiVersions?.max ?? UNKNOWN
  const API_VERSION_DISPLAY = `Min: ${minProtocolApiVersion},  Max: ${maxProtocolApiVersion}`

  const updateDisabled = autoUpdateDisabledReason !== null

  // check for available updates on an interval
  useInterval(checkAppUpdate, UPDATE_RECHECK_DELAY_MS)

  return (
    <Card title={TITLE}>
      <Flex alignItems={ALIGN_FLEX_START} padding={SPACING_3}>
        <Box marginRight={SPACING_3}>
          <Box marginBottom={SPACING_3}>
            <LabeledValue label={NAME_LABEL} value={displayName} />
          </Box>
          <LabeledValue
            label={FIRMWARE_VERSION_LABEL}
            value={firmwareVersion || UNKNOWN}
          />
        </Box>
        <Box marginRight={SPACING_AUTO}>
          <Box marginBottom={SPACING_3}>
            <LabeledValue
              label={SERVER_VERSION_LABEL}
              value={version || UNKNOWN}
            />
          </Box>
          <LabeledValue
            label={BOTH_PROTOCOL_API_VERSIONS_LABEL}
            value={API_VERSION_DISPLAY}
          />
        </Box>
        <SecondaryBtn
          {...updateBtnProps}
          as={Link}
          to={!updateDisabled ? updateUrl : '#'}
          flex={FLEX_NONE}
          minWidth="9rem"
          className={cx({ disabled: updateDisabled })}
        >
          {autoUpdateAction}
        </SecondaryBtn>
        {autoUpdateDisabledReason !== null && (
          <Tooltip {...updateBtnTooltipProps}>
            {autoUpdateDisabledReason}
          </Tooltip>
        )}
      </Flex>
    </Card>
  )
}
