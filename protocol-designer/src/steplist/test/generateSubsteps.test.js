// @flow
import { generateSubstepItem } from '../generateSubstepItem'
import { makeInitialRobotState } from '../../step-generation/utils'
import { makeContext } from '../../step-generation/__fixtures__'
import { THERMOCYCLER_STATE } from '../../constants'

describe('generateSubstepItem', () => {
  const stepId = 'step123'
  const tiprackId = 'tiprack1Id'
  const pipetteId = 'p300SingleId'
  const sourcePlateId = 'sourcePlateId'
  const destPlateId = 'destPlateId'

  let invariantContext, labwareNamesByModuleId, robotState
  beforeEach(() => {
    invariantContext = makeContext()

    labwareNamesByModuleId = {
      magnet123: {
        nickname: 'mag nickname',
      },
      tempId: {
        nickname: 'temp nickname',
      },
      thermocyclerModuleId: {
        nickname: 'tc nickname',
      },
    }
    robotState = makeInitialRobotState({
      invariantContext,
      pipetteLocations: { p300SingleId: { mount: 'left' } },
      labwareLocations: {
        tiprack1Id: { slot: '2' },
        sourcePlateId: { slot: '4' },
        destPlateId: { slot: '5' },
      },
      tiprackSetting: { tiprack1Id: false },
    })
  })

  it('null is returned when no robotState', () => {
    robotState = null
    const stepArgsAndErrors = {
      stepArgs: {
        module: 'aaaa',
        commandCreatorFnName: 'deactivateTemperature',
        message: 'message',
      },
      errors: null,
    }

    const result = generateSubstepItem(
      stepArgsAndErrors,
      invariantContext,
      robotState,
      stepId,
      labwareNamesByModuleId
    )

    expect(result).toBeNull()
  })
  ;[
    {
      testName: 'null is returned when no stepArgsAndErrors',
      args: null,
    },
    {
      testName: 'null is returned when no stepArgs',
      args: {
        stepArgs: null,
        errors: { field: {} },
      },
    },
    {
      testName: 'null is returned when no errors',
      args: {
        stepArgs: {
          module: 'aaaa',
          commandCreatorFnName: 'deactivateTemperature',
          message: 'message',
        },
        errors: { field: {} },
      },
    },
  ].forEach(({ testName, args }) => {
    it(testName, () => {
      const result = generateSubstepItem(
        args,
        invariantContext,
        robotState,
        stepId,
        labwareNamesByModuleId
      )

      expect(result).toBeNull()
    })
  })

  it('delay command returns pause substep data', () => {
    const stepArgsAndErrors = {
      errors: null,
      stepArgs: {
        commandCreatorFnName: 'delay',
        message: 'test',
        wait: true,
      },
    }
    const robotState = makeInitialRobotState({ invariantContext })

    const result = generateSubstepItem(
      stepArgsAndErrors,
      invariantContext,
      robotState,
      stepId,
      labwareNamesByModuleId
    )

    expect(result).toEqual({
      substepType: 'pause',
      pauseStepArgs: stepArgsAndErrors.stepArgs,
    })
  })

  describe('like substeps', () => {
    let sharedArgs
    beforeEach(() => {
      sharedArgs = {
        pipette: pipetteId,
        sourceLabware: sourcePlateId,
        destLabware: destPlateId,
        name: 'testing',
        volume: 50,
        preWetTip: false,
        touchTipAfterAspirate: false,
        touchTipAfterAspirateOffsetMmFromBottom: 10,
        changeTip: 'once',
        aspirateFlowRateUlSec: 5,
        aspirateOffsetFromBottomMm: 3,
        touchTipAfterDispense: false,
        touchTipAfterDispenseOffsetMmFromBottom: 10,
        dispenseFlowRateUlSec: 5,
        dispenseOffsetFromBottomMm: 10,
      }
    })
    ;[
      {
        testName: 'consolidate command returns substep data',
        stepArgs: {
          commandCreatorFnName: 'consolidate',
          sourceWells: ['A1', 'A2'],
          destWell: 'C1',
          blowoutLocation: null,
          blowoutFlowRateUlSec: 10,
          blowoutOffsetFromTopMm: 5,
          mixFirstAspirate: null,
          mixInDestination: null,
        },
        expected: {
          substepType: 'sourceDest',
          multichannel: false,
          commandCreatorFnName: 'consolidate',
          parentStepId: stepId,
          rows: [
            {
              activeTips: {
                pipette: pipetteId,
                labware: tiprackId,
                well: 'A1',
              },
              source: { well: 'A1', preIngreds: null, postIngreds: null },
              dest: undefined,
              volume: 50,
            },
            {
              volume: 50,
              source: { well: 'A2', preIngreds: null, postIngreds: null },
              activeTips: {
                pipette: pipetteId,
                labware: tiprackId,
                well: 'A1',
              },
              dest: {
                postIngreds: {
                  __air__: 100,
                },
                preIngreds: null,
                well: 'C1',
              },
            },
          ],
        },
      },
      {
        testName: 'distribute command returns substep data',
        stepArgs: {
          commandCreatorFnName: 'distribute',
          sourceWell: 'A1',
          destWells: ['A1', 'A2'],
          disposalVolume: null,
          disposalLabware: null,
          disposalWell: null,
          blowoutFlowRateUlSec: 10,
          blowoutOffsetFromTopMm: 5,
          mixBeforeAspirate: null,
        },
        expected: {
          commandCreatorFnName: 'distribute',
          multichannel: false,
          parentStepId: stepId,
          rows: [
            {
              activeTips: {
                labware: tiprackId,
                pipette: pipetteId,
                well: 'A1',
              },
              dest: {
                postIngreds: {
                  __air__: 50,
                },
                preIngreds: null,
                well: 'A1',
              },
              source: {
                postIngreds: null,
                preIngreds: null,
                well: 'A1',
              },
              volume: 50,
            },
            {
              activeTips: {
                labware: tiprackId,
                pipette: pipetteId,
                well: 'A1',
              },
              dest: {
                postIngreds: {
                  __air__: 50,
                },
                preIngreds: null,
                well: 'A2',
              },
              source: undefined,
              volume: 50,
            },
          ],
          substepType: 'sourceDest',
        },
      },
      {
        testName: 'transfer command returns substep data',
        stepArgs: {
          commandCreatorFnName: 'transfer',
          sourceWells: ['A1', 'A2'],
          destWells: ['A1', 'A2'],
          blowoutLocation: null,
          blowoutFlowRateUlSec: 10,
          blowoutOffsetFromTopMm: 5,
          mixBeforeAspirate: null,
          mixInDestination: null,
        },
        expected: {
          substepType: 'sourceDest',
          multichannel: false,
          commandCreatorFnName: 'transfer',
          parentStepId: stepId,
          rows: [
            {
              activeTips: {
                pipette: pipetteId,
                labware: tiprackId,
                well: 'A1',
              },
              source: { well: 'A1', preIngreds: null, postIngreds: null },
              dest: {
                well: 'A1',
                preIngreds: null,
                postIngreds: {
                  __air__: 50,
                },
              },
              volume: 50,
            },
            {
              volume: 50,
              source: { well: 'A2', preIngreds: null, postIngreds: null },
              activeTips: {
                pipette: pipetteId,
                labware: tiprackId,
                well: 'A1',
              },
              dest: {
                postIngreds: {
                  __air__: 50,
                },
                preIngreds: null,
                well: 'A2',
              },
            },
          ],
        },
      },
    ].forEach(({ testName, stepArgs, expected }) => {
      it(testName, () => {
        const stepArgsAndErrors = {
          errors: null,
          stepArgs: { ...sharedArgs, ...stepArgs },
        }

        const result = generateSubstepItem(
          stepArgsAndErrors,
          invariantContext,
          robotState,
          stepId,
          labwareNamesByModuleId
        )

        expect(result).toEqual(expected)
      })
    })
  })

  it('mix command returns substep data', () => {
    const stepArgsAndErrors = {
      stepArgs: {
        name: 'testing',
        commandCreatorFnName: 'mix',
        labware: sourcePlateId,
        pipette: pipetteId,
        wells: ['A1', 'A2'],
        volume: 50,
        times: 2,
        touchTip: false,
        touchTipMmFromBottom: 5,
        changeTip: 'always',
        blowoutLocation: null,
        blowoutFlowRateUlSec: 3,
        blowoutOffsetFromTopMm: 3,
        aspirateOffsetFromBottomMm: 4,
        dispenseOffsetFromBottomMm: 10,
        aspirateFlowRateUlSec: 5,
        dispenseFlowRateUlSec: 5,
      },
      errors: null,
    }

    const result = generateSubstepItem(
      stepArgsAndErrors,
      invariantContext,
      robotState,
      stepId,
      labwareNamesByModuleId
    )

    const expected = {
      commandCreatorFnName: 'mix',
      multichannel: false,
      parentStepId: 'step123',
      rows: [
        {
          activeTips: {
            labware: 'tiprack1Id',
            pipette: 'p300SingleId',
            well: 'A1',
          },
          dest: {
            postIngreds: {
              __air__: 50,
            },
            preIngreds: null,
            well: 'A1',
          },
          source: {
            postIngreds: null,
            preIngreds: null,
            well: 'A1',
          },
          volume: 50,
        },
        {
          activeTips: {
            labware: 'tiprack1Id',
            pipette: 'p300SingleId',
            well: 'A1',
          },
          dest: {
            postIngreds: {
              __air__: 100,
            },
            preIngreds: {
              __air__: 50,
            },
            well: 'A1',
          },
          source: {
            postIngreds: {
              __air__: 50,
            },
            preIngreds: {
              __air__: 50,
            },
            well: 'A1',
          },
          volume: 50,
        },
        {
          activeTips: {
            labware: 'tiprack1Id',
            pipette: 'p300SingleId',
            well: 'B1',
          },
          dest: {
            postIngreds: {
              __air__: 50,
            },
            preIngreds: null,
            well: 'A2',
          },
          source: {
            postIngreds: null,
            preIngreds: null,
            well: 'A2',
          },
          volume: 50,
        },
        {
          activeTips: {
            labware: 'tiprack1Id',
            pipette: 'p300SingleId',
            well: 'B1',
          },
          dest: {
            postIngreds: {
              __air__: 100,
            },
            preIngreds: {
              __air__: 50,
            },
            well: 'A2',
          },
          source: {
            postIngreds: {
              __air__: 50,
            },
            preIngreds: {
              __air__: 50,
            },
            well: 'A2',
          },
          volume: 50,
        },
      ],
      substepType: 'sourceDest',
    }
    expect(result).toEqual(expected)
  })

  it('engageMagnet returns substep data with engage = true', () => {
    const stepArgsAndErrors = {
      errors: null,
      stepArgs: {
        module: 'magnet123',
        commandCreatorFnName: 'engageMagnet',
        message: null,
      },
    }

    const result = generateSubstepItem(
      stepArgsAndErrors,
      invariantContext,
      robotState,
      stepId,
      labwareNamesByModuleId
    )

    expect(result).toEqual({
      substepType: 'magnet',
      engage: true,
      labwareNickname: 'mag nickname',
      message: null,
    })
  })

  it('disengageMagnet returns substep data with engage = false', () => {
    const stepArgsAndErrors = {
      errors: null,
      stepArgs: {
        module: 'magnet123',
        commandCreatorFnName: 'disengageMagnet',
        message: null,
      },
    }

    const result = generateSubstepItem(
      stepArgsAndErrors,
      invariantContext,
      robotState,
      stepId,
      labwareNamesByModuleId
    )

    expect(result).toEqual({
      substepType: 'magnet',
      engage: false,
      labwareNickname: 'mag nickname',
      message: null,
    })
  })

  it('setTemperature returns substep data with temperature', () => {
    const stepArgsAndErrors = {
      errors: null,
      stepArgs: {
        module: 'tempId',
        commandCreatorFnName: 'setTemperature',
        targetTemperature: 45,
        message: null,
      },
    }

    const result = generateSubstepItem(
      stepArgsAndErrors,
      invariantContext,
      robotState,
      stepId,
      labwareNamesByModuleId
    )

    expect(result).toEqual({
      substepType: 'temperature',
      temperature: 45,
      labwareNickname: 'temp nickname',
      message: null,
    })
  })

  it('setTemperature returns temperature when 0', () => {
    const stepArgsAndErrors = {
      errors: null,
      stepArgs: {
        module: 'tempId',
        commandCreatorFnName: 'setTemperature',
        targetTemperature: 0,
        message: null,
      },
    }

    const result = generateSubstepItem(
      stepArgsAndErrors,
      invariantContext,
      robotState,
      stepId,
      labwareNamesByModuleId
    )

    expect(result).toEqual({
      substepType: 'temperature',
      temperature: 0,
      labwareNickname: 'temp nickname',
      message: null,
    })
  })

  it('deactivateTemperature returns substep data with null temp', () => {
    const stepArgsAndErrors = {
      errors: null,
      stepArgs: {
        module: 'tempId',
        commandCreatorFnName: 'deactivateTemperature',
        message: null,
      },
    }

    const result = generateSubstepItem(
      stepArgsAndErrors,
      invariantContext,
      robotState,
      stepId,
      labwareNamesByModuleId
    )

    expect(result).toEqual({
      substepType: 'temperature',
      temperature: null,
      labwareNickname: 'temp nickname',
      message: null,
    })
  })

  it('thermocyclerState returns substep data', () => {
    const stepArgsAndErrors = {
      errors: null,
      stepArgs: {
        module: 'thermocyclerModuleId',
        commandCreatorFnName: THERMOCYCLER_STATE,
        message: 'a message',
        blockTargetTemp: 44,
        lidTargetTemp: 66,
        lidOpen: false,
      },
    }
    const result = generateSubstepItem(
      stepArgsAndErrors,
      invariantContext,
      robotState,
      stepId,
      labwareNamesByModuleId
    )
    expect(result).toEqual({
      substepType: THERMOCYCLER_STATE,
      labwareNickname: 'tc nickname',
      blockTargetTemp: 44,
      lidTargetTemp: 66,
      lidOpen: false,
      message: 'a message',
    })
  })

  it('null is returned when no matching command', () => {
    const stepArgsAndErrors = {
      errors: null,
      stepArgs: {
        commandCreatorFnName: 'nonexistentCommand',
      },
    }

    const result = generateSubstepItem(
      stepArgsAndErrors,
      invariantContext,
      robotState,
      stepId,
      {}
    )

    expect(result).toBeNull()
  })
})
