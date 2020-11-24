// @flow
// mock portal for enzyme tests
import * as React from 'react'

type Props = {| children: React.Node |}

// replace Portal with a pass-through React.Fragment
export const Portal = ({ children }: Props): React.Node => <>{children}</>

export const PortalRoot = (): React.Node => <></>
export const TopPortalRoot = (): React.Node => <></>
