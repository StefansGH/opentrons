// @flow
// titled modal page component
import * as React from 'react'
import cx from 'classnames'

import { Box } from '../primitives'
import { TitleBar } from '../structure'
import { Overlay } from './Overlay'
import styles from './modals.css'

import type { TitleBarProps } from '../structure'

export type ModalPageProps = {|
  /** Props for title bar at top of modal page */
  titleBar: TitleBarProps,
  contentsClassName?: string,
  heading?: React.Node,
  children?: React.Node,
  innerProps?: React.ElementProps<typeof Box>,
  outerProps?: React.ElementProps<typeof Box>,
|}

export function ModalPage(props: ModalPageProps): React.Node {
  const { titleBar, heading, innerProps = {}, outerProps = {} } = props

  return (
    <Box className={styles.modal_page} {...outerProps}>
      <Overlay />
      <TitleBar {...titleBar} className={styles.title_bar} />
      <Box
        className={cx(styles.modal_page_contents, props.contentsClassName)}
        {...innerProps}
      >
        {heading && <h3 className={styles.modal_heading}>{heading}</h3>}
        {props.children}
      </Box>
    </Box>
  )
}
