export interface TrainingState {
	count: number
	passedTime: number
	currentExercise: number
}

export const TICK = 'tick'
export const SET_NEXT_EXERCISE = 'setNextExercise'
export const SET_NEW_EXERCISE = 'setNewExercise'

interface TickAction {
  type: typeof TICK
}

interface SetNextExerciseAction {
  type: typeof SET_NEXT_EXERCISE
}

interface SetNewExerciseAction {
	type: typeof SET_NEW_EXERCISE
	payload: {
		currentExercise: number
	}
}

export type TrainingActionTypes = TickAction | SetNextExerciseAction | SetNewExerciseAction