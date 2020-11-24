// @flow
import { combineReducers } from 'redux'
import { handleActions } from 'redux-actions'

import type { Reducer } from 'redux'
import type { Action } from '../../types'
import type { FileMetadataFields, SaveFileMetadataAction } from '../types'
import type { LoadFileAction, NewProtocolFields } from '../../load-file'
import type { ComputeRobotStateTimelineSuccessAction } from '../actions'
import type { Timeline } from '../../step-generation'
import type { Substeps } from '../../steplist/types'

export const timelineIsBeingComputed: Reducer<boolean, any> = handleActions(
  {
    COMPUTE_ROBOT_STATE_TIMELINE_REQUEST: () => true,
    COMPUTE_ROBOT_STATE_TIMELINE_SUCCESS: () => false,
  },
  false
)

export const computedRobotStateTimeline: Reducer<Timeline, any> = handleActions(
  {
    COMPUTE_ROBOT_STATE_TIMELINE_SUCCESS: (
      state,
      action: ComputeRobotStateTimelineSuccessAction
    ) => action.payload.standardTimeline,
  },
  { timeline: [] }
)

export const computedSubsteps: Reducer<Substeps, any> = handleActions(
  {
    COMPUTE_ROBOT_STATE_TIMELINE_SUCCESS: (
      state,
      action: ComputeRobotStateTimelineSuccessAction
    ) => action.payload.substeps,
  },
  {}
)

const defaultFields = {
  protocolName: '',
  author: '',
  description: '',
}

const updateMetadataFields = (
  state: FileMetadataFields,
  action: LoadFileAction
): FileMetadataFields => {
  const { file } = action.payload
  return file.metadata
}

// track if a protocol has been created or loaded
const currentProtocolExists = handleActions(
  {
    LOAD_FILE: () => true,
    CREATE_NEW_PROTOCOL: () => true,
  },
  false
)

function newProtocolMetadata(
  state: FileMetadataFields,
  action: { payload: NewProtocolFields }
): FileMetadataFields {
  return {
    ...defaultFields,
    protocolName: action.payload.name || '',
    created: Date.now(),
    lastModified: null,
  }
}

const fileMetadata = handleActions(
  {
    LOAD_FILE: updateMetadataFields,
    CREATE_NEW_PROTOCOL: newProtocolMetadata,
    SAVE_FILE_METADATA: (
      state: FileMetadataFields,
      action: SaveFileMetadataAction
    ): FileMetadataFields => ({
      ...state,
      ...action.payload,
    }),
    SAVE_PROTOCOL_FILE: (state: FileMetadataFields): FileMetadataFields => {
      // NOTE: 'last-modified' is updated "on-demand", in response to user clicking "save/export"
      return { ...state, lastModified: Date.now() }
    },
  },
  defaultFields
)

export type RootState = {|
  computedRobotStateTimeline: Timeline,
  computedSubsteps: Substeps,
  currentProtocolExists: boolean,
  fileMetadata: FileMetadataFields,
  timelineIsBeingComputed: boolean,
|}

const _allReducers = {
  computedRobotStateTimeline,
  computedSubsteps,
  currentProtocolExists,
  fileMetadata,
  timelineIsBeingComputed,
}

export const rootReducer: Reducer<RootState, Action> = combineReducers(
  _allReducers
)
