import { createSelector } from 'reselect'
import { RootState } from '../index'

const userDataSelector = (state: RootState) => state.user

export const userSelector = createSelector(
  userDataSelector,
  user => user
)

export const userErrorSelector = createSelector(
  userDataSelector,
  user => user.error
)

export const userIsLogedInSelector = createSelector(
  userDataSelector,
  user => user.isLogedIn
)