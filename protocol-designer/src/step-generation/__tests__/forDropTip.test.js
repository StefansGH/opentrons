// @flow
import {
  makeStateArgsStandard,
  makeContext,
  makeState,
  DEFAULT_PIPETTE,
  FIXED_TRASH_ID,
} from '../__fixtures__'
import { makeImmutableStateUpdater } from '../__utils__'

import { forDropTip as _forDropTip } from '../getNextRobotStateAndWarnings/forDropTip'

const forDropTip = makeImmutableStateUpdater(_forDropTip)

describe('dropTip', () => {
  let invariantContext

  beforeEach(() => {
    invariantContext = makeContext()
  })

  // TODO Ian 2019-04-19: this is a ONE-OFF fixture
  function makeRobotState(args: {
    singleHasTips: boolean,
    multiHasTips: boolean,
  }) {
    const _robotState = makeState({
      ...makeStateArgsStandard(),
      invariantContext,
      tiprackSetting: { tiprack1Id: true },
    })
    _robotState.tipState.pipettes.p300SingleId = args.singleHasTips
    _robotState.tipState.pipettes.p300MultiId = args.multiHasTips
    return _robotState
  }

  describe('replaceTip: single channel', () => {
    it('drop tip if there is a tip', () => {
      const prevRobotState = makeRobotState({
        singleHasTips: true,
        multiHasTips: true,
      })
      const params = {
        pipette: DEFAULT_PIPETTE,
        labware: FIXED_TRASH_ID,
        well: 'A1',
      }

      const result = forDropTip(params, invariantContext, prevRobotState)

      const expectedRobotState = makeRobotState({
        singleHasTips: false,
        multiHasTips: true,
      })
      expectedRobotState.liquidState.labware[FIXED_TRASH_ID] = { A1: null }

      expect(result).toEqual({
        warnings: [],
        robotState: expectedRobotState,
      })
    })

    // TODO: IL 2019-11-20
    it.todo('no tip on pipette')
  })

  describe('Multi-channel dropTip', () => {
    it('drop tip when there are tips', () => {
      const prevRobotState = makeRobotState({
        singleHasTips: true,
        multiHasTips: true,
      })
      const params = {
        pipette: 'p300MultiId',
        labware: FIXED_TRASH_ID,
        well: 'A1',
      }

      const result = forDropTip(params, invariantContext, prevRobotState)

      const expectedRobotState = makeRobotState({
        singleHasTips: true,
        multiHasTips: false,
      })
      expectedRobotState.liquidState.labware[FIXED_TRASH_ID] = { A1: null }

      expect(result).toEqual({
        warnings: [],
        robotState: expectedRobotState,
      })
    })
  })

  describe('liquid tracking', () => {
    it('dropTip uses full volume when transfering tip to trash', () => {
      const prevRobotState = makeRobotState({
        singleHasTips: true,
        multiHasTips: true,
      })
      const params = {
        pipette: 'p300MultiId',
        labware: FIXED_TRASH_ID,
        well: 'A1',
      }
      prevRobotState.liquidState.pipettes.p300MultiId['0'] = {
        ingred1: 150,
      }

      const result = forDropTip(params, invariantContext, prevRobotState)

      expect(result).toMatchObject({
        robotState: {
          liquidState: {
            pipettes: {
              p300MultiId: {
                '0': {
                  ingred1: 0,
                },
              },
            },
            labware: {
              [FIXED_TRASH_ID]: {
                A1: { ingred1: 150 },
              },
            },
          },
        },
      })
    })
  })
})
