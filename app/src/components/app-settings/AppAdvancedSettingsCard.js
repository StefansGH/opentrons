// @flow
// app info card with version and updated
import * as React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import startCase from 'lodash/startCase'

import {
  Card,
  LabeledRadioGroup,
  LabeledSelect,
  LabeledToggle,
} from '@opentrons/components'

import * as Config from '../../config'
import * as Calibration from '../../calibration'

import type { DropdownOption } from '@opentrons/components'
import type { DevInternalFlag } from '../../config/types'
import type { Dispatch } from '../../types'

const TITLE = 'Advanced Settings'

const USE_TRASH_SURFACE_TIP_CAL_LABEL = 'Tip Length Calibration Settings'
const USE_TRASH_SURFACE_TIP_CAL_BODY =
  "An Opentrons Calibration Block makes tip length calibration easier. Contact us to request a calibration block. If you don't have one, use the Trash Bin."
const ALWAYS_USE_BLOCK_LABEL = 'Always use Calibration Block to calibrate'
const ALWAYS_USE_TRASH_LABEL = 'Always use Trash Bin to calibrate'
const ALWAYS_PROMPT_LABEL =
  'Always show prompt to choose Calibration Block or Trash Bin'
const ALWAYS_BLOCK: 'always-block' = 'always-block'
const ALWAYS_TRASH: 'always-trash' = 'always-trash'
const ALWAYS_PROMPT: 'always-prompt' = 'always-prompt'

type BlockSelection =
  | typeof ALWAYS_BLOCK
  | typeof ALWAYS_TRASH
  | typeof ALWAYS_PROMPT

const UPDATE_CHANNEL_LABEL = 'Update Channel'
const UPDATE_CHANNEL_BODY =
  'Sets the update channel of your app. "Stable" receives the latest stable releases. "Beta" is updated more frequently so you can try out new features, but the releases may be less well tested than "Stable".'

const ENABLE_DEV_TOOLS_LABEL = 'Enable Developer Tools'
const ENABLE_DEV_TOOLS_BODY =
  "Requires restart. Turns on the app's developer tools, which provide access to the inner workings of the app and additional logging."

const DEV_TITLE = 'Developer Only (unstable)'

export function AppAdvancedSettingsCard(): React.Node {
  const useTrashSurfaceForTipCal = useSelector(state =>
    Config.getUseTrashSurfaceForTipCal(state)
  )
  const devToolsOn = useSelector(Config.getDevtoolsEnabled)
  const devInternalFlags = useSelector(Config.getFeatureFlags)
  const channel = useSelector(Config.getUpdateChannel)
  const channelOptions: Array<DropdownOption> = useSelector(
    Config.getUpdateChannelOptions
  )
  const dispatch = useDispatch<Dispatch>()

  const handleUseTrashSelection: BlockSelection => void = selection => {
    switch (selection) {
      case ALWAYS_PROMPT:
        dispatch(Calibration.resetUseTrashSurfaceForTipCal())
        break
      case ALWAYS_BLOCK:
        dispatch(Calibration.setUseTrashSurfaceForTipCal(false))
        break
      case ALWAYS_TRASH:
        dispatch(Calibration.setUseTrashSurfaceForTipCal(true))
        break
    }
  }
  const toggleDevtools = () => dispatch(Config.toggleDevtools())
  const toggleDevInternalFlag = (flag: DevInternalFlag) =>
    dispatch(Config.toggleDevInternalFlag(flag))
  const handleChannel = event =>
    dispatch(Config.updateConfigValue('update.channel', event.target.value))
  return (
    <>
      <Card title={TITLE}>
        <LabeledRadioGroup
          data-test="useTrashSurfaceForTipCalRadioGroup"
          label={USE_TRASH_SURFACE_TIP_CAL_LABEL}
          value={
            useTrashSurfaceForTipCal === true
              ? ALWAYS_TRASH
              : useTrashSurfaceForTipCal === false
              ? ALWAYS_BLOCK
              : ALWAYS_PROMPT
          }
          onChange={event => {
            // you know this is a limited-selection field whose values are only
            // the elements of BlockSelection; i know this is a limited-selection
            // field whose values are only the elements of BlockSelection; but sadly,
            // neither of us can get Flow to know it
            handleUseTrashSelection(
              ((event.currentTarget.value: any): BlockSelection)
            )
          }}
          options={[
            { name: ALWAYS_USE_BLOCK_LABEL, value: ALWAYS_BLOCK },
            { name: ALWAYS_USE_TRASH_LABEL, value: ALWAYS_TRASH },
            { name: ALWAYS_PROMPT_LABEL, value: ALWAYS_PROMPT },
          ]}
        >
          <p>{USE_TRASH_SURFACE_TIP_CAL_BODY}</p>
        </LabeledRadioGroup>
        <LabeledSelect
          data-test="updateChannelSetting"
          label={UPDATE_CHANNEL_LABEL}
          value={channel}
          options={channelOptions}
          onChange={handleChannel}
        >
          <p>{UPDATE_CHANNEL_BODY}</p>
        </LabeledSelect>
        <LabeledToggle
          data-test="enableDevToolsToggle"
          label={ENABLE_DEV_TOOLS_LABEL}
          toggledOn={devToolsOn}
          onClick={toggleDevtools}
        >
          <p>{ENABLE_DEV_TOOLS_BODY}</p>
        </LabeledToggle>
      </Card>
      {devToolsOn && (
        <Card title={DEV_TITLE}>
          {Config.DEV_INTERNAL_FLAGS.map(flag => (
            <LabeledToggle
              key={flag}
              data-test={`devInternalToggle${flag}`}
              label={`__DEV__ ${startCase(flag)}`}
              toggledOn={Boolean(devInternalFlags?.[flag])}
              onClick={() => toggleDevInternalFlag(flag)}
            />
          ))}
        </Card>
      )}
    </>
  )
}
