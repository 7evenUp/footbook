export interface Profile {
  photoURL?: string
  displayName?: string
}

export interface ProfileState {
  isFetching: boolean
  profile: Profile
  error: string | null
}

export const PROFILE_SET_PHOTO = 'profile/setPhoto'
export const PROFILE_UPDATE_PHOTO_REQUEST = 'PROFILE_UPDATE_PHOTO_REQUEST'
export const PROFILE_UPDATE_PHOTO_SUCCESS = 'PROFILE_UPDATE_PHOTO_SUCCESS'
export const PROFILE_UPDATE_PHOTO_FAILURE = 'PROFILE_UPDATE_PHOTO_FAILURE'
export const PROFILE_UPDATE_NAME_REQUEST = 'PROFILE_UPDATE_NAME_REQUEST'
export const PROFILE_UPDATE_NAME_SUCCESS = 'PROFILE_UPDATE_NAME_SUCCESS'
export const PROFILE_UPDATE_NAME_FAILURE = 'PROFILE_UPDATE_NAME_FAILURE'

interface ProfileSetPhotoAction {
  type: typeof PROFILE_SET_PHOTO
  payload: {
    photoURL: string
  }
}

interface ProfileUpdatePhotoRequestAction {
  type: typeof PROFILE_UPDATE_PHOTO_REQUEST
  payload: {
    photoUri: string
    uid?: string
  }
}

interface ProfileUpdatePhotoSuccessAction {
  type: typeof PROFILE_UPDATE_PHOTO_SUCCESS,
  payload: {
    photoUrl: string
  }
}

interface ProfileUpdatePhotoFailureAction {
  type: typeof PROFILE_UPDATE_PHOTO_FAILURE,
  error: string
}

interface ProfileUpdateNameRequestAction {
  type: typeof PROFILE_UPDATE_NAME_REQUEST
  payload: {
    name: string
  }
}

interface ProfileUpdateNameSuccessAction {
  type: typeof PROFILE_UPDATE_NAME_SUCCESS
  payload: {
    displayName: string
  }
}

interface ProfileUpdateNameFailureAction {
  type: typeof PROFILE_UPDATE_NAME_FAILURE
  error: string
}

export type ProfileActionTypes = ProfileSetPhotoAction |
  ProfileUpdatePhotoRequestAction |
  ProfileUpdatePhotoSuccessAction |
  ProfileUpdatePhotoFailureAction |
  ProfileUpdateNameRequestAction |
  ProfileUpdateNameSuccessAction |
  ProfileUpdateNameFailureAction
