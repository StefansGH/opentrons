// @flow
// setup modules component
import * as React from 'react'
import { connect } from 'react-redux'

import {
  getModuleDisplayName,
  checkModuleCompatibility,
} from '@opentrons/shared-data'
import {
  Icon,
  Flex,
  Text,
  FONT_BODY_1_DARK,
  FONT_SIZE_BODY_1,
  FONT_STYLE_ITALIC,
  SPACING_1,
  SPACING_3,
  ALIGN_CENTER,
  DIRECTION_COLUMN,
} from '@opentrons/components'
import { selectors as robotSelectors } from '../../robot'
import { getAttachedModules } from '../../modules'

import { InfoSection } from './InfoSection'
import { SectionContentHalf } from '../layout'
import { MissingItemWarning } from './MissingItemWarning'

import styles from './styles.css'

import type { State, Dispatch } from '../../types'
import type { SessionModule } from '../../robot/types'
import type { Robot } from '../../discovery/types'
import type { AttachedModule } from '../../modules/types'

const NOT_ATTACHED = 'Not attached'

type OP = {| robot: Robot |}

type SP = {|
  modules: Array<SessionModule>,
  actualModules: Array<AttachedModule>,
  attachModulesUrl: string,
|}

type DP = {| dispatch: Dispatch |}

type Props = {| ...OP, ...SP, ...DP |}

const TITLE = 'Required Modules'
const inexactModuleSupportArticle =
  'https://support.opentrons.com/en/articles/3450143-gen2-pipette-compatibility'

export const ProtocolModulesCard: React.AbstractComponent<OP> = connect<
  Props,
  OP,
  SP,
  DP,
  _,
  _
>(mapStateToProps)(ProtocolModulesCardComponent)

function ProtocolModulesCardComponent(props: Props) {
  const { modules, actualModules, attachModulesUrl } = props

  if (modules.length < 1) return null

  const moduleInfo = modules.map(module => {
    const matching = actualModules.find(m =>
      checkModuleCompatibility(m.model, module.model)
    )
    const displayName = matching
      ? getModuleDisplayName(matching.model)
      : getModuleDisplayName(module.model)
    const modulesMatch = matching
      ? matching.model === module.model
        ? 'match'
        : 'inexact_match'
      : 'incompatible'
    return { ...module, displayName, modulesMatch }
  })
  console.log(moduleInfo)

  const modulesMatch = moduleInfo.every(m => m.modulesMatch !== 'incompatible')
  const someInexact = moduleInfo.some(m => m.modulesMatch === 'inexact_match')

  return (
    <InfoSection title={TITLE}>
      <SectionContentHalf>
        {moduleInfo.map(m => (
          <Flex
            key={m.slot}
            alignItems={ALIGN_CENTER}
            marginTop={SPACING_1}
            marginBottom={SPACING_3}
          >
            <Icon
              name={
                m.modulesMatch !== 'incompatible'
                  ? 'check-circle'
                  : 'checkbox-blank-circle-outline'
              }
              width="1.5rem"
              marginRight={SPACING_3}
            />
            <Flex flexDirection={DIRECTION_COLUMN}>
              <Text marginBottom={SPACING_1} css={FONT_BODY_1_DARK}>
                {m.displayName}
              </Text>
              {m.modulesMatch === 'incompatible' && (
                <Text fontSize={FONT_SIZE_BODY_1} fontStyle={FONT_STYLE_ITALIC}>
                  {NOT_ATTACHED}
                </Text>
              )}
            </Flex>
          </Flex>
        ))}
      </SectionContentHalf>
      {!modulesMatch && (
        <MissingItemWarning
          missingItem="Required module"
          urlLabel="go to module setup"
          url={attachModulesUrl}
        />
      )}
      {modulesMatch && someInexact && (
        <SectionContentHalf className={styles.soft_warning}>
          <div className={styles.warning_info_wrapper}>
            <Icon name="information" className={styles.info_icon} />
            <span>Inexact module match,</span>
            <a
              href={inexactModuleSupportArticle}
              target="_blank"
              rel="noopener noreferrer"
            >
              &nbsp; learn more
            </a>
            <span>.</span>
          </div>
        </SectionContentHalf>
      )}
    </InfoSection>
  )
}

function mapStateToProps(state: State, ownProps: OP): SP {
  const { robot } = ownProps
  const actualModules = getAttachedModules(state, robot.name)

  return {
    actualModules,
    modules: robotSelectors.getModules(state),
    // TODO(mc, 2018-10-10): pass this prop down from page
    attachModulesUrl: `/robots/${robot.name}/instruments`,
  }
}
