// @flow
import {
  getLabwareDefURI,
  TEMPERATURE_MODULE_TYPE,
  TEMPERATURE_MODULE_V1,
  THERMOCYCLER_MODULE_TYPE,
} from '@opentrons/shared-data'
import {
  fixtureP10Single,
  fixtureP300Multi,
} from '@opentrons/shared-data/pipette/fixtures/name'

import fixture_trash from '@opentrons/shared-data/labware/fixtures/2/fixture_trash.json'
import fixture_96_plate from '@opentrons/shared-data/labware/fixtures/2/fixture_96_plate.json'
import fixture_tiprack_10_ul from '@opentrons/shared-data/labware/fixtures/2/fixture_tiprack_10_ul.json'
import fixture_tiprack_300_ul from '@opentrons/shared-data/labware/fixtures/2/fixture_tiprack_300_ul.json'
import { TEMPERATURE_DEACTIVATED } from '../../constants'
import {
  AIR,
  DEST_WELL_BLOWOUT_DESTINATION,
  getDispenseAirGapLocation,
  getLocationTotalVolume,
  makeInitialRobotState,
  mergeLiquid,
  repeatArray,
  SOURCE_WELL_BLOWOUT_DESTINATION,
  splitLiquid,
} from '../utils/misc'
import { thermocyclerStateDiff } from '../utils/thermocyclerStateDiff'
import { FIXED_TRASH_ID } from '../__fixtures__'
import { thermocyclerPipetteCollision } from '../utils'
import type { RobotState } from '../'

describe('splitLiquid', () => {
  const singleIngred = {
    ingred1: 100,
  }

  const twoIngred = {
    ingred1: 100,
    ingred2: 300,
  }

  it('simple split with 1 ingredient in source', () => {
    expect(splitLiquid(60, singleIngred)).toEqual({
      source: { ingred1: 40 },
      dest: { ingred1: 60 },
    })
  })

  it('get 0 volume in source when you split it all', () => {
    expect(splitLiquid(100, singleIngred)).toEqual({
      source: { ingred1: 0 },
      dest: { ingred1: 100 },
    })
  })

  it('split with 2 ingredients in source', () => {
    expect(splitLiquid(20, twoIngred)).toEqual({
      source: {
        ingred1: 95,
        ingred2: 285,
      },
      dest: {
        ingred1: 5,
        ingred2: 15,
      },
    })
  })

  it('split all with 2 ingredients', () => {
    expect(splitLiquid(400, twoIngred)).toEqual({
      source: {
        ingred1: 0,
        ingred2: 0,
      },
      dest: twoIngred,
    })
  })

  it('taking out 0 volume results in same source, empty dest', () => {
    expect(splitLiquid(0, twoIngred)).toEqual({
      source: twoIngred,
      dest: {
        ingred1: 0,
        ingred2: 0,
      },
    })
  })

  it('split with 2 ingreds, one has 0 vol', () => {
    expect(
      splitLiquid(50, {
        ingred1: 200,
        ingred2: 0,
      })
    ).toEqual({
      source: {
        ingred1: 150,
        ingred2: 0,
      },
      dest: {
        ingred1: 50,
        ingred2: 0,
      },
    })
  })

  it('split with 2 ingredients, floating-point volume', () => {
    expect(
      splitLiquid(
        1000 / 3, // ~333.33
        twoIngred
      )
    ).toEqual({
      source: {
        ingred1: 100 - (0.25 * 1000) / 3,
        ingred2: 50,
      },
      dest: {
        ingred1: (0.25 * 1000) / 3,
        ingred2: 250,
      },
    })
  })

  it('splitting with no ingredients in source just splits "air"', () => {
    expect(splitLiquid(100, null)).toEqual({
      source: null,
      dest: { [AIR]: 100 },
    })
  })

  it('splitting with 0 volume in source just splits "air"', () => {
    expect(splitLiquid(100, { ingred1: 0 })).toEqual({
      source: { ingred1: 0 },
      dest: { [AIR]: 100 },
    })
  })

  it('splitting with excessive volume leaves "air" in dest', () => {
    expect(splitLiquid(100, { ingred1: 50, ingred2: 20 })).toEqual({
      source: { ingred1: 0, ingred2: 0 },
      dest: {
        ingred1: 50,
        ingred2: 20,
        [AIR]: 30,
      },
    })
  })

  // TODO Ian 2018-03-19 figure out what to do with air warning reporting
  it.todo('splitting with air in source should do something (throw error???)')
  // expect(() =>
  // splitLiquid(50, { ingred1: 100, [AIR]: 20 })
  // ).toThrow(/source cannot contain air/)
})

describe('mergeLiquid', () => {
  it('merge ingreds 1 2 with 2 3 to get 1 2 3', () => {
    expect(
      mergeLiquid(
        {
          ingred1: 30,
          ingred2: 40,
        },
        {
          ingred2: 15,
          ingred3: 25,
        }
      )
    ).toEqual({
      ingred1: 30,
      ingred2: 55,
      ingred3: 25,
    })
  })

  it('merge ingreds 3 with 1 2 to get 1 2 3', () => {
    expect(
      mergeLiquid(
        {
          ingred3: 25,
        },
        {
          ingred1: 30,
          ingred2: 40,
        }
      )
    ).toEqual({
      ingred1: 30,
      ingred2: 40,
      ingred3: 25,
    })
  })
})

describe('repeatArray', () => {
  it('repeat array of objects', () => {
    expect(repeatArray([{ a: 1 }, { b: 2 }, { c: 3 }], 3)).toEqual([
      { a: 1 },
      { b: 2 },
      { c: 3 },
      { a: 1 },
      { b: 2 },
      { c: 3 },
      { a: 1 },
      { b: 2 },
      { c: 3 },
    ])
  })

  it('repeat array of arrays', () => {
    expect(repeatArray([[1, 2], [3, 4]], 4)).toEqual([
      [1, 2],
      [3, 4],
      [1, 2],
      [3, 4],
      [1, 2],
      [3, 4],
      [1, 2],
      [3, 4],
    ])
  })
})

describe('makeInitialRobotState', () => {
  expect(
    makeInitialRobotState({
      invariantContext: {
        pipetteEntities: {
          p10SingleId: {
            id: 'p10SingleId',
            name: 'p10_single',
            spec: fixtureP10Single,
            tiprackDefURI: getLabwareDefURI(fixture_tiprack_10_ul),
            tiprackLabwareDef: fixture_tiprack_10_ul,
          },
          p300MultiId: {
            id: 'p300MultiId',
            name: 'p300_multi',
            spec: fixtureP300Multi,
            tiprackDefURI: getLabwareDefURI(fixture_tiprack_300_ul),
            tiprackLabwareDef: fixture_tiprack_300_ul,
          },
        },
        moduleEntities: {
          someTempModuleId: {
            id: 'someTempModuleId',
            model: TEMPERATURE_MODULE_V1,
            type: TEMPERATURE_MODULE_TYPE,
          },
        },
        labwareEntities: {
          somePlateId: {
            id: 'somePlateId',
            labwareDefURI: getLabwareDefURI(fixture_96_plate),
            def: fixture_96_plate,
          },
          tiprack10Id: {
            id: 'tiprack10Id',
            labwareDefURI: getLabwareDefURI(fixture_tiprack_10_ul),
            def: fixture_tiprack_10_ul,
          },
          tiprack300Id: {
            id: 'tiprack300Id',
            labwareDefURI: getLabwareDefURI(fixture_tiprack_300_ul),
            def: fixture_tiprack_300_ul,
          },
          trashId: {
            id: FIXED_TRASH_ID,
            labwareDefURI: getLabwareDefURI(fixture_trash),
            def: fixture_trash,
          },
        },
      },
      labwareLocations: {
        somePlateId: { slot: '1' },
        tiprack10Id: { slot: '2' },
        tiprack300Id: { slot: '4' },
        trashId: { slot: '12' },
      },
      moduleLocations: {
        someTempModuleId: {
          slot: '3',
          moduleState: {
            type: TEMPERATURE_MODULE_TYPE,
            status: TEMPERATURE_DEACTIVATED,
            targetTemperature: null,
          },
        },
      },
      pipetteLocations: {
        p10SingleId: { mount: 'left' },
        p300MultiId: { mount: 'right' },
      },
    })
  ).toMatchSnapshot()
})

describe('thermocyclerStateDiff', () => {
  const getInitialDiff = () => ({
    lidOpen: false,
    lidClosed: false,
    setBlockTemperature: false,
    deactivateBlockTemperature: false,
    setLidTemperature: false,
    deactivateLidTemperature: false,
  })
  const thermocyclerId = 'thermocyclerId'
  const testCases = [
    {
      testMsg: 'returns lidOpen when the lid state has changed to open',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: null,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: true,
      },
      expected: {
        ...getInitialDiff(),
        lidOpen: true,
      },
    },
    {
      testMsg:
        'does NOT return lidOpen when the lid state did not change to open',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: null,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: false,
      },
      expected: {
        ...getInitialDiff(),
        lidOpen: false,
        lidClosed: true,
      },
    },
    {
      testMsg: 'returns lidClosed when the lid state has changed to closed',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: null,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: false,
      },
      expected: {
        ...getInitialDiff(),
        lidClosed: true,
      },
    },
    {
      testMsg:
        'does NOT return lidClosed when the lid state did not change to closed',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: null,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: true,
      },
      expected: {
        ...getInitialDiff(),
        lidClosed: false,
        lidOpen: true,
      },
    },
    {
      testMsg:
        'returns setLidTemperature when the lid temperature state changes from null to non null value',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: false,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: null,
        lidTargetTemp: 20,
        lidOpen: false,
      },
      expected: {
        ...getInitialDiff(),
        setLidTemperature: true,
      },
    },
    {
      testMsg:
        'returns setLidTemperature when the lid temperature state changes from a non null value to a different non null value',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: null,
        lidTargetTemp: 20,
        lidOpen: false,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: null,
        lidTargetTemp: 30,
        lidOpen: false,
      },
      expected: {
        ...getInitialDiff(),
        setLidTemperature: true,
      },
    },
    {
      testMsg:
        'does NOT return setLidTemperature when the lid temperature state stays the same ',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: null,
        lidTargetTemp: 20,
        lidOpen: false,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: null,
        lidTargetTemp: 20,
        lidOpen: false,
      },
      expected: {
        ...getInitialDiff(),
        setLidTemperature: false,
      },
    },
    {
      testMsg:
        'returns deactivateLidTemperature when the lid temperature state changes from a non null value to null',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: null,
        lidTargetTemp: 20,
        lidOpen: false,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: false,
      },
      expected: {
        ...getInitialDiff(),
        deactivateLidTemperature: true,
      },
    },
    {
      testMsg:
        'returns setBlockTemperature when the block temperature state has changed to non null value',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: false,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: 20,
        lidTargetTemp: null,
        lidOpen: false,
      },
      expected: {
        ...getInitialDiff(),
        setBlockTemperature: true,
      },
    },
    {
      testMsg:
        'returns no diff when the block temperature state is the same number as previous',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: 20,
        lidTargetTemp: null,
        lidOpen: false,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: 20,
        lidTargetTemp: null,
        lidOpen: false,
      },
      expected: {
        ...getInitialDiff(),
      },
    },
    {
      testMsg:
        'returns activate block when temp goes from number to a different number',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: 20,
        lidTargetTemp: null,
        lidOpen: false,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: 40,
        lidTargetTemp: null,
        lidOpen: false,
      },
      expected: {
        ...getInitialDiff(),
        setBlockTemperature: true,
      },
    },
    {
      testMsg: 'returns deactivate block when temp goes from number to null',
      moduleState: {
        type: THERMOCYCLER_MODULE_TYPE,
        blockTargetTemp: 20,
        lidTargetTemp: null,
        lidOpen: false,
      },
      args: {
        module: thermocyclerId,
        commandCreatorFnName: 'thermocyclerState',
        blockTargetTemp: null,
        lidTargetTemp: null,
        lidOpen: false,
      },
      expected: {
        ...getInitialDiff(),
        deactivateBlockTemperature: true,
      },
    },
  ]
  testCases.forEach(({ testMsg, moduleState, args, expected }) => {
    it(testMsg, () => {
      expect(thermocyclerStateDiff(moduleState, args)).toEqual(expected)
    })
  })
})

describe('thermocyclerPipetteColision', () => {
  const thermocyclerId = 'thermocyclerId'
  const labwareOnTCId = 'labwareOnTCId'

  const testCases: Array<{|
    testMsg: string,
    modules: $PropertyType<RobotState, 'modules'>,
    labware: $PropertyType<RobotState, 'labware'>,
    labwareId: string,
    expected: boolean,
  |}> = [
    {
      testMsg:
        'returns true when aspirating from labware on TC with lidOpen set to null',
      modules: {
        [thermocyclerId]: {
          slot: '7',
          moduleState: {
            type: THERMOCYCLER_MODULE_TYPE,
            blockTargetTemp: null,
            lidTargetTemp: null,
            lidOpen: null,
          },
        },
      },
      labware: {
        [labwareOnTCId]: { slot: thermocyclerId }, // when labware is on a module, the slot is the module's id
      },
      labwareId: labwareOnTCId,
      expected: true,
    },
    {
      testMsg:
        'returns true when aspirating from labware on TC with lidOpen set to false',
      modules: {
        [thermocyclerId]: {
          slot: '7',
          moduleState: {
            type: THERMOCYCLER_MODULE_TYPE,
            blockTargetTemp: null,
            lidTargetTemp: null,
            lidOpen: false,
          },
        },
      },
      labware: {
        [labwareOnTCId]: { slot: thermocyclerId }, // when labware is on a module, the slot is the module's id
      },
      labwareId: labwareOnTCId,
      expected: true,
    },
    {
      testMsg:
        'returns false when aspirating from labware on TC with lidOpen set to true',
      modules: {
        [thermocyclerId]: {
          slot: '7',
          moduleState: {
            type: THERMOCYCLER_MODULE_TYPE,
            blockTargetTemp: null,
            lidTargetTemp: null,
            lidOpen: true,
          },
        },
      },
      labware: {
        [labwareOnTCId]: { slot: thermocyclerId }, // when labware is on a module, the slot is the module's id
      },
      labwareId: labwareOnTCId,
      expected: false,
    },
    {
      testMsg:
        'returns false when labware is not on TC, even when TC lid is closed',
      modules: {
        [thermocyclerId]: {
          slot: '7',
          moduleState: {
            type: THERMOCYCLER_MODULE_TYPE,
            blockTargetTemp: null,
            lidTargetTemp: null,
            lidOpen: false,
          },
        },
      },
      labware: {
        [labwareOnTCId]: { slot: thermocyclerId },
      },
      labwareId: 'someOtherLabwareNotOnTC',
      expected: false,
    },
  ]

  testCases.forEach(({ testMsg, modules, labware, labwareId, expected }) => {
    it(testMsg, () => {
      expect(thermocyclerPipetteCollision(modules, labware, labwareId)).toBe(
        expected
      )
    })
  })
})

describe('getDispenseAirGapLocation', () => {
  let sourceLabware
  let destLabware
  let sourceWell
  let destWell
  beforeEach(() => {
    sourceLabware = 'sourceLabware'
    destLabware = 'destLabware'
    sourceWell = 'sourceWell'
    destWell = 'destWell'
  })
  it('should return destination when blowout location is NOT source', () => {
    const locations = [
      DEST_WELL_BLOWOUT_DESTINATION,
      FIXED_TRASH_ID,
      'some_rando_location',
    ]
    expect.assertions(locations.length)
    locations.forEach(blowoutLocation => {
      expect(
        getDispenseAirGapLocation({
          blowoutLocation,
          sourceLabware,
          destLabware,
          sourceWell,
          destWell,
        })
      ).toEqual({
        dispenseAirGapLabware: destLabware,
        dispenseAirGapWell: destWell,
      })
    })
  })
  it('should return source when blowout location is source', () => {
    expect(
      getDispenseAirGapLocation({
        blowoutLocation: SOURCE_WELL_BLOWOUT_DESTINATION,
        sourceLabware,
        destLabware,
        sourceWell,
        destWell,
      })
    ).toEqual({
      dispenseAirGapLabware: sourceLabware,
      dispenseAirGapWell: sourceWell,
    })
  })
})

describe('getLocationTotalVolume', () => {
  it('should return the sum of all non-AIR volumes', () => {
    const result = getLocationTotalVolume({
      a: 2,
      b: 4,
      [AIR]: 100,
    })
    expect(result).toEqual(2 + 4)
  })

  it('should return 0 for empty (null) location', () => {
    const result = getLocationTotalVolume(null)
    expect(result).toEqual(0)
  })

  it('should return 0 for empty ({}) location', () => {
    const result = getLocationTotalVolume({})
    expect(result).toEqual(0)
  })

  it('should return 0 location with only AIR', () => {
    const result = getLocationTotalVolume({ [AIR]: 123 })
    expect(result).toEqual(0)
  })
})
