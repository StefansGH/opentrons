// @flow
import assert from 'assert'
import flatMap from 'lodash/flatMap'
import mapValues from 'lodash/mapValues'
import range from 'lodash/range'
import reduce from 'lodash/reduce'
import {
  getIsTiprack,
  getLabwareDefURI,
  getWellsDepth,
  getWellNamePerMultiTip,
} from '@opentrons/shared-data'

import type { LabwareDefinition2 } from '@opentrons/shared-data'
import type { BlowoutParams } from '@opentrons/shared-data/protocol/flowTypes/schemaV4'
import type { PipetteEntity, LabwareEntity } from '../../step-forms'
import type {
  DefiniteLocationLiquidState,
  LocationLiquidState,
  InvariantContext,
  RobotState,
  SourceAndDest,
  CurriedCommandCreator,
} from '../types'
import { curryCommandCreator } from './curryCommandCreator'
import { blowout } from '../commandCreators/atomic/blowout'

export const AIR: '__air__' = '__air__'

export const SOURCE_WELL_BLOWOUT_DESTINATION: 'source_well' = 'source_well'
export const DEST_WELL_BLOWOUT_DESTINATION: 'dest_well' = 'dest_well'

export function repeatArray<T>(array: Array<T>, repeats: number): Array<T> {
  return flatMap(range(repeats), (i: number): Array<T> => array)
}

/** Total volume of a location ("air" is not included in the sum) */
export function getLocationTotalVolume(loc: LocationLiquidState): number {
  return reduce(
    loc,
    (acc: number, ingredVol: number, ingredId: string) => {
      return ingredId === AIR ? acc : acc + ingredVol
    },
    0
  )
}

/** Breaks a liquid volume state into 2 parts. Assumes all liquids are evenly mixed. */
export function splitLiquid(
  volume: number,
  sourceLiquidState: LocationLiquidState
): SourceAndDest {
  const totalSourceVolume = getLocationTotalVolume(sourceLiquidState)

  if (totalSourceVolume === 0) {
    // Splitting from empty source
    return {
      source: sourceLiquidState,
      dest: { [AIR]: volume },
    }
  }

  if (volume > totalSourceVolume) {
    // Take all of source, plus air
    return {
      source: mapValues(sourceLiquidState, () => 0),
      dest: {
        ...sourceLiquidState,
        [AIR]: volume - totalSourceVolume,
      },
    }
  }

  const ratios: { [ingredId: string]: number } = reduce(
    sourceLiquidState,
    (
      acc: { [ingredId: string]: number },
      ingredVol: number,
      ingredId: string
    ) => ({
      ...acc,
      [ingredId]: ingredVol / totalSourceVolume,
    }),
    {}
  )

  const emptySourceAndDest = { source: null, dest: null }
  if (!sourceLiquidState) {
    return emptySourceAndDest
  } else {
    return Object.keys(sourceLiquidState).reduce((acc, ingredId) => {
      const destVol = ratios[ingredId] * volume
      return {
        source: {
          ...acc.source,
          [ingredId]: (sourceLiquidState[ingredId] || 0) - destVol,
        },
        dest: {
          ...acc.dest,
          [ingredId]: destVol,
        },
      }
    }, emptySourceAndDest)
  }
}

/** The converse of splitLiquid. Adds all of one liquid to the other.
 * The args are called 'source' and 'dest', but here they're interchangable.
 */
export function mergeLiquid(
  source: LocationLiquidState,
  dest: LocationLiquidState
): LocationLiquidState {
  if (source == null && dest == null) return null

  return {
    // include all ingreds exclusive to 'dest'
    ...dest,

    ...reduce<LocationLiquidState, DefiniteLocationLiquidState>(
      source,
      (
        acc,
        ingredVol: number,
        ingredId: string
      ): DefiniteLocationLiquidState => {
        const isCommonIngred = dest ? ingredId in dest : false
        const ingredVolume = isCommonIngred
          ? // sum volumes of ingredients common to 'source' and 'dest'
            ingredVol + dest?.[ingredId]
          : // include all ingreds exclusive to 'source'
            ingredVol

        return {
          ...acc,
          [ingredId]: ingredVolume,
        }
      },
      {}
    ),
  }
}

// TODO: Ian 2019-04-19 move to shared-data helpers?
export function getWellsForTips(
  channels: 1 | 8,
  labwareDef: LabwareDefinition2,
  well: string
): {|
  wellsForTips: Array<string>,
  allWellsShared: boolean,
|} {
  // Array of wells corresponding to the tip at each position.
  const wellsForTips =
    channels === 1 ? [well] : getWellNamePerMultiTip(labwareDef, well)

  if (!wellsForTips) {
    console.warn(
      channels === 1
        ? `Invalid well: ${well}`
        : `For labware def (URI ${getLabwareDefURI(
            labwareDef
          )}), with primary well ${well}, no wells are accessible by 8-channel's 1st tip`
    )
    // TODO: Ian 2019-04-11 figure out a clearer way to handle failure case
    return { wellsForTips: [], allWellsShared: false }
  }

  // allWellsShared: eg in a trough, all wells are shared by an 8-channel
  // (for single-channel, "all wells" are always shared because there is only 1 well)
  // NOTE Ian 2018-03-15: there is no support for a case where some but not all wells are shared.
  // Eg, some unusual labware that allows 2 tips to a well will not work with the implementation below.
  // Low-priority TODO.
  const allWellsShared = wellsForTips.every(w => w && w === wellsForTips[0])

  return { wellsForTips, allWellsShared }
}

// Set blowout location depending on the 'blowoutLocation' arg: set it to
// the SOURCE_WELL_BLOWOUT_DESTINATION / DEST_WELL_BLOWOUT_DESTINATION
// special strings, or to a labware ID.
export const blowoutUtil = (args: {
  pipette: $PropertyType<BlowoutParams, 'pipette'>,
  sourceLabwareId: string,
  sourceWell: $PropertyType<BlowoutParams, 'well'>,
  destLabwareId: string,
  destWell: $PropertyType<BlowoutParams, 'well'>,
  blowoutLocation: ?string,
  flowRate: number,
  offsetFromTopMm: number,
  invariantContext: InvariantContext,
}): Array<CurriedCommandCreator> => {
  const {
    pipette,
    sourceLabwareId,
    sourceWell,
    destLabwareId,
    destWell,
    blowoutLocation,
    flowRate,
    offsetFromTopMm,
    invariantContext,
  } = args

  if (!blowoutLocation) return []
  let labware
  let well

  if (blowoutLocation === SOURCE_WELL_BLOWOUT_DESTINATION) {
    labware = invariantContext.labwareEntities[sourceLabwareId]
    well = sourceWell
  } else if (blowoutLocation === DEST_WELL_BLOWOUT_DESTINATION) {
    labware = invariantContext.labwareEntities[destLabwareId]
    well = destWell
  } else {
    // if it's not one of the magic strings, it's a labware id
    labware = invariantContext.labwareEntities?.[blowoutLocation]
    well = 'A1'
    if (!labware) {
      assert(
        false,
        `expected a labwareId for blowoutUtil's "blowoutLocation", got ${blowoutLocation}`
      )
      return []
    }
  }
  const offsetFromBottomMm =
    getWellsDepth(labware.def, [well]) + offsetFromTopMm
  return [
    curryCommandCreator(blowout, {
      pipette: pipette,
      labware: labware.id,
      well,
      flowRate,
      offsetFromBottomMm,
    }),
  ]
}

export function createEmptyLiquidState(
  invariantContext: InvariantContext
): $PropertyType<RobotState, 'liquidState'> {
  const { labwareEntities, pipetteEntities } = invariantContext

  return {
    pipettes: reduce(
      pipetteEntities,
      (acc, pipette: PipetteEntity, id: string) => {
        return {
          ...acc,
          [id]: {},
        }
      },
      {}
    ),
    labware: reduce(
      labwareEntities,
      (acc, labware: LabwareEntity, id: string) => {
        return { ...acc, [id]: {} }
      },
      {}
    ),
  }
}

export function createTipLiquidState<T>(
  channels: number,
  contents: T
): { [tipId: string]: T } {
  return range(channels).reduce(
    (tipIdAcc, tipId) => ({
      ...tipIdAcc,
      [tipId]: contents,
    }),
    {}
  )
}

// always return destination unless the blowout location is the source
export const getDispenseAirGapLocation = (args: {|
  blowoutLocation: ?string,
  sourceLabware: string,
  destLabware: string,
  sourceWell: string,
  destWell: string,
|}): {|
  dispenseAirGapLabware: string,
  dispenseAirGapWell: string,
|} => {
  const {
    blowoutLocation,
    sourceLabware,
    destLabware,
    sourceWell,
    destWell,
  } = args
  return blowoutLocation === SOURCE_WELL_BLOWOUT_DESTINATION
    ? { dispenseAirGapLabware: sourceLabware, dispenseAirGapWell: sourceWell }
    : { dispenseAirGapLabware: destLabware, dispenseAirGapWell: destWell }
}

// NOTE: pipettes have no tips, tiprack are full
export function makeInitialRobotState(args: {|
  invariantContext: InvariantContext,
  labwareLocations: $PropertyType<RobotState, 'labware'>,
  moduleLocations: $PropertyType<RobotState, 'modules'>,
  pipetteLocations: $PropertyType<RobotState, 'pipettes'>,
|}): RobotState {
  const {
    invariantContext,
    labwareLocations,
    moduleLocations,
    pipetteLocations,
  } = args
  return {
    labware: labwareLocations,
    modules: moduleLocations,
    pipettes: pipetteLocations,
    liquidState: createEmptyLiquidState(invariantContext),
    tipState: {
      pipettes: reduce(
        pipetteLocations,
        (acc, pipetteTemporalProperties, id) =>
          pipetteTemporalProperties.mount ? { ...acc, [id]: false } : acc,
        {}
      ),
      tipracks: reduce(
        labwareLocations,
        (acc, _, labwareId) => {
          const def = invariantContext.labwareEntities[labwareId].def
          if (!getIsTiprack(def)) return acc
          const tipState = mapValues(def.wells, () => true)
          return { ...acc, [labwareId]: tipState }
        },
        {}
      ),
    },
  }
}
