// @flow
// robot status panel with connect button
import * as React from 'react'

import { AttachedPipettesCard } from './AttachedPipettesCard'
import { AttachedModulesCard } from './AttachedModulesCard'
import { CardContainer, CardRow } from '../layout'

import type { Mount } from '../../pipettes/types'

type Props = {|
  robotName: string,
  makeChangePipetteUrl: (mount: Mount) => string,
  makeConfigurePipetteUrl: (mount: Mount) => string,
  isChangingOrConfiguringPipette: boolean,
|}

export function InstrumentSettings(props: Props): React.Node {
  const {
    robotName,
    makeChangePipetteUrl,
    makeConfigurePipetteUrl,
    isChangingOrConfiguringPipette,
  } = props

  return (
    <CardContainer>
      <CardRow>
        <AttachedPipettesCard
          robotName={robotName}
          makeChangeUrl={makeChangePipetteUrl}
          makeConfigureUrl={makeConfigurePipetteUrl}
          isChangingOrConfiguringPipette={isChangingOrConfiguringPipette}
        />
      </CardRow>
      <CardRow>
        <AttachedModulesCard robotName={robotName} />
      </CardRow>
    </CardContainer>
  )
}
