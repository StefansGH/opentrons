// @flow
import {createSelector} from 'reselect'
import last from 'lodash/last'
import reduce from 'lodash/reduce'
import mapValues from 'lodash/mapValues'
import max from 'lodash/max'
import isEmpty from 'lodash/isEmpty'
import each from 'lodash/each'
import some from 'lodash/some'

import {selectors as labwareIngredSelectors} from '../labware-ingred/reducers'
import {selectors as pipetteSelectors} from '../pipettes'
import {
  getFormWarnings,
  getFormErrors,
  stepFormToArgs,
} from './formLevel'
import type {FormError, FormWarning} from './formLevel'
import {
  hydrateField,
  getFieldErrors,
} from './fieldLevel'
import {initialSelectedItemState} from './reducers'
import type {RootState, OrderedStepsState, SelectableItem} from './reducers'
import type {BaseState, Selector} from '../types'

import type {
  StepItemData,
  FormSectionState,
  SubstepIdentifier,
  TerminalItemId,
  StepFormAndFieldErrors,
  StepArgsAndErrors,
  StepFormContextualState,
} from './types'

import type {
  FormData,
  StepIdType,
} from '../form-types'

const NO_SAVED_FORM_ERROR = 'NO_SAVED_FORM_ERROR'

// TODO Ian 2018-01-19 Rethink the hard-coded 'steplist' key in Redux root
const rootSelector = (state: BaseState): RootState => state.steplist

// ======= Selectors ===============================================

const getUnsavedForm: Selector<?FormData> = createSelector(
  rootSelector,
  (state: RootState) => state.unsavedForm
)

const getStepFormContextualState: Selector<StepFormContextualState> = createSelector(
  labwareIngredSelectors.rootSelector,
  pipetteSelectors.rootSelector,
  (labwareIngred, _pipettes) => ({
    labwareIngred: labwareIngred,
    pipettes: _pipettes,
  })
)

const getHydratedUnsavedForm: Selector<?FormData> = createSelector(
  getUnsavedForm,
  getStepFormContextualState,
  (_unsavedForm, _contextualState) => (
    _unsavedForm && mapValues(_unsavedForm, (value, name) => (
      hydrateField(_contextualState, name, value)
    ))
  )
)

// TODO Ian 2018-02-08 rename formData to something like getUnsavedForm or unsavedFormFields
// NOTE: DEPRECATED use getUnsavedForm instead
const formData = getUnsavedForm

const formModalData = createSelector(
  rootSelector,
  (state: RootState) => state.unsavedFormModal
)

/** fallbacks for selectedItem reducer, when null */
const getNonNullSelectedItem: Selector<SelectableItem> = createSelector(
  rootSelector,
  (state: RootState) => {
    if (state.selectedItem != null) return state.selectedItem
    if (state.orderedSteps.length > 0) return {isStep: true, id: last(state.orderedSteps)}
    return initialSelectedItemState
  }
)

const getSelectedStepId: Selector<?StepIdType> = createSelector(
  getNonNullSelectedItem,
  (item) => item.isStep ? item.id : null
)

const getSelectedTerminalItemId: Selector<?TerminalItemId> = createSelector(
  getNonNullSelectedItem,
  (item) => !item.isStep ? item.id : null
)

const getHoveredItem: Selector<?SelectableItem> = createSelector(
  rootSelector,
  (state: RootState) => state.hoveredItem
)

const getHoveredStepId: Selector<?StepIdType> = createSelector(
  getHoveredItem,
  (item) => (item && item.isStep) ? item.id : null
)

const getHoveredTerminalItemId: Selector<?TerminalItemId> = createSelector(
  getHoveredItem,
  (item) => (item && !item.isStep) ? item.id : null
)

const getHoveredSubstep: Selector<SubstepIdentifier> = createSelector(
  rootSelector,
  (state: RootState) => state.hoveredSubstep
)

// Hovered or selected item. Hovered has priority.
// Uses fallback of getNonNullSelectedItem if not hovered or selected
const getActiveItem: Selector<SelectableItem> = createSelector(
  getNonNullSelectedItem,
  getHoveredItem,
  (selected, hovered) => hovered != null
    ? hovered
    : selected
)

const getSteps = createSelector(
  rootSelector,
  (state: RootState) => state.steps
)

const getCollapsedSteps = createSelector(
  rootSelector,
  (state: RootState) => state.collapsedSteps
)

const orderedStepsSelector: Selector<OrderedStepsState> = createSelector(
  rootSelector,
  (state: RootState) => state.orderedSteps
)

/** This is just a simple selector, but has some debugging logic. TODO Ian 2018-03-20: use assert here */
const getSavedForms: Selector<{[StepIdType]: FormData}> = createSelector(
  getSteps,
  orderedStepsSelector,
  (state: BaseState) => rootSelector(state).savedStepForms,
  (steps, orderedSteps, savedStepForms) => {
    orderedSteps.forEach(stepId => {
      if (!steps[stepId]) {
        console.error(`Encountered an undefined step: ${stepId}`)
      }
    })

    return savedStepForms
  }
)

const getHydratedSavedForms: Selector<{[StepIdType]: FormData}> = createSelector(
  getSavedForms,
  getStepFormContextualState,
  (savedForms, contextualState) => (
    mapValues(savedForms, (savedForm) => (
      mapValues(savedForm, (value, name) => (
        hydrateField(contextualState, name, value)
      ))
    ))
  )
)

// TODO type with hydrated form type
const getAllErrorsFromHydratedForm = (hydratedForm: FormData): StepFormAndFieldErrors => {
  let errors: StepFormAndFieldErrors = {}

  each(hydratedForm, (value, fieldName) => {
    const fieldErrors = getFieldErrors(fieldName, value)
    if (fieldErrors && fieldErrors.length > 0) {
      errors = {
        ...errors,
        field: {
          ...errors.field,
          [fieldName]: fieldErrors,
        },
      }
    }
  })
  const formErrors = getFormErrors(hydratedForm.stepType, hydratedForm)
  if (formErrors && formErrors.length > 0) {
    errors = {...errors, form: formErrors}
  }

  return errors
}

// TODO Brian 2018-10-29 separate out getErrors and getStepArgs
const getArgsAndErrorsByStepId: Selector<{[StepIdType]: StepArgsAndErrors}> = createSelector(
  getSteps,
  getHydratedSavedForms,
  orderedStepsSelector,
  (steps, savedStepForms, orderedSteps) => {
    return reduce(orderedSteps, (acc, stepId) => {
      let nextStepData
      if (steps[stepId] && savedStepForms[stepId]) {
        const savedForm = savedStepForms[stepId]

        const errors = getAllErrorsFromHydratedForm(savedForm)

        nextStepData = isEmpty(errors)
          ? {stepArgs: stepFormToArgs(savedForm)}
          : {errors, stepArgs: null}
      } else {
        // NOTE: usually, stepFormData is undefined here b/c there's no saved step form for it:
        nextStepData = {
          errors: {form: [{title: NO_SAVED_FORM_ERROR}]},
          stepArgs: null,
        }
      } // TODO Ian 2018-03-20 revisit "no saved form for step"
      return {
        ...acc,
        [stepId]: nextStepData,
      }
    }, {})
  }
)

// TODO: BC 2018-10-30 after separation of getStepArgs and getStepErrors
// , move the NO_SAVED_FORM_ERROR into a separate wrapping selector
// it is currently there to keep the step item error state from appearing
// before you've saved the form once
const getFormAndFieldErrorsByStepId: Selector<{[StepIdType]: StepFormAndFieldErrors}> = createSelector(
  getArgsAndErrorsByStepId,
  (stepsArgsAndErrors) => (
    mapValues(stepsArgsAndErrors, (argsAndErrors) => {
      const formErrors = argsAndErrors.errors && argsAndErrors.errors.form
      if (formErrors && some(formErrors, error => error.title === NO_SAVED_FORM_ERROR)) return {}
      return argsAndErrors.errors
    })
  )
)

const isNewStepForm = createSelector(
  getUnsavedForm,
  getSavedForms,
  (formData, savedForms) => !!(formData && formData.id != null && !savedForms[formData.id])
)

/** Array of labware (labwareId's) involved in hovered Step, or [] */
const hoveredStepLabware: Selector<Array<string>> = createSelector(
  getArgsAndErrorsByStepId,
  getHoveredStepId,
  (allStepArgsAndErrors, hoveredStep) => {
    const blank = []
    if (typeof hoveredStep !== 'number' || !allStepArgsAndErrors[hoveredStep]) {
      return blank
    }

    const stepForm = allStepArgsAndErrors[hoveredStep].stepArgs

    if (!stepForm) {
      return blank
    }

    if (
      stepForm.stepType === 'consolidate' ||
      stepForm.stepType === 'distribute' ||
      stepForm.stepType === 'transfer'
    ) {
      // source and dest labware
      const src = stepForm.sourceLabware
      const dest = stepForm.destLabware

      return [src, dest]
    }

    if (stepForm.stepType === 'mix') {
      // only 1 labware
      return [stepForm.labware]
    }

    // step types that have no labware that gets highlighted
    if (!(stepForm.stepType === 'pause')) {
      // TODO Ian 2018-05-08 use assert here
      console.warn(`hoveredStepLabware does not support step type "${stepForm.stepType}"`)
    }

    return blank
  }
)

const stepCreationButtonExpandedSelector: Selector<boolean> = createSelector(
  rootSelector,
  (state: RootState) => state.stepCreationButtonExpanded
)

const nextStepId: Selector<number> = createSelector( // generates the next step ID to use
  getSteps,
  (steps): number => {
    const allStepIds = Object.keys(steps).map(stepId => parseInt(stepId))
    return allStepIds.length === 0
      ? 0
      : max(allStepIds) + 1
  }
)

const formLevelWarnings: Selector<Array<FormWarning>> = createSelector(
  getUnsavedForm,
  getStepFormContextualState,
  (unsavedFormData, contextualState) => {
    if (!unsavedFormData) return []
    const {id, stepType, ...fields} = unsavedFormData
    const hydratedFields = mapValues(fields, (value, name) => hydrateField(contextualState, name, value))
    return getFormWarnings(stepType, hydratedFields)
  }
)

const formLevelErrors: Selector<Array<FormError>> = createSelector(
  getUnsavedForm,
  getStepFormContextualState,
  (unsavedFormData, contextualState) => {
    if (!unsavedFormData) return []
    const {id, stepType, ...fields} = unsavedFormData
    const hydratedFields = mapValues(fields, (value, name) => hydrateField(contextualState, name, value))
    return getFormErrors(stepType, hydratedFields)
  }
)

const formSectionCollapseSelector: Selector<FormSectionState> = createSelector(
  rootSelector,
  s => s.formSectionCollapse
)

export const allSteps: Selector<{[stepId: StepIdType]: StepItemData}> = createSelector(
  getSteps,
  getCollapsedSteps,
  getSavedForms,
  labwareIngredSelectors.getLabware,
  (steps, collapsedSteps, savedForms, labware) => {
    return mapValues(
      steps,
      (step: StepItemData, id: StepIdType): StepItemData => {
        const savedForm = (savedForms && savedForms[id]) || null

        // Assign the step title
        let title

        if (savedForm && savedForm['step-name']) {
          title = savedForm['step-name']
        } else {
          title = step.stepType
        }

        return {
          ...steps[id],
          formData: savedForm,
          title,
          description: savedForm ? savedForm['step-details'] : null,
        }
      }
    )
  }
)

const getSelectedStep = createSelector(
  allSteps,
  getSelectedStepId,
  (_allSteps, selectedStepId) => {
    const stepId = selectedStepId

    if (!_allSteps || stepId == null) {
      return null
    }

    return _allSteps[stepId]
  }
)

// TODO: BC: 2018-10-26 remove this when we decide to not block save
export const currentFormCanBeSaved: Selector<boolean | null> = createSelector(
  getHydratedUnsavedForm,
  getSelectedStepId,
  allSteps,
  (hydratedForm, selectedStepId, _allSteps) => {
    if (selectedStepId == null || !_allSteps[selectedStepId] || !hydratedForm) return null
    return isEmpty(getAllErrorsFromHydratedForm(hydratedForm))
  }
)

export const getWellSelectionLabwareId: Selector<?string> = createSelector(
  rootSelector,
  (state: RootState) => state.wellSelectionLabwareId
)

export default {
  rootSelector,

  allSteps,
  getFormAndFieldErrorsByStepId,
  currentFormCanBeSaved,
  getSelectedStep,

  stepCreationButtonExpanded: stepCreationButtonExpandedSelector,
  orderedSteps: orderedStepsSelector,
  getSelectedStepId,
  getSelectedTerminalItemId,
  getHoveredTerminalItemId,
  getHoveredStepId,
  getActiveItem,
  getHoveredSubstep,
  getUnsavedForm,
  getHydratedUnsavedForm,
  formData, // TODO: remove after sunset
  formModalData,
  nextStepId,
  getArgsAndErrorsByStepId,
  isNewStepForm,
  formLevelWarnings,
  formLevelErrors,
  formSectionCollapse: formSectionCollapseSelector,
  hoveredStepLabware,
  getWellSelectionLabwareId,

  // NOTE: these are exposed only for substeps/selectors.js
  getSteps,
  orderedStepsSelector,
  getCollapsedSteps,
  getSavedForms,
}
