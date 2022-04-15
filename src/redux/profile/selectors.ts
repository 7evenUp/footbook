import { createSelector } from 'reselect'
import { RootState } from '../index'

const profileDataSelector = (state: RootState) => state.profile

export const photoUrlSelector = createSelector(
  profileDataSelector,
  profile => profile.profile.photoURL
)

export const displayNameSelector = createSelector(
  profileDataSelector,
  profile => profile.profile.displayName
)

export const profileIsLoadingSelector = createSelector(
  profileDataSelector,
  profile => profile.isFetching
)

export const profileErrorSelector = createSelector(
  profileDataSelector,
  profile => profile.error
)