import {
  Profile,
  ProfileActionTypes,
  PROFILE_SET_PHOTO,
  PROFILE_UPDATE_PHOTO_REQUEST,
  PROFILE_UPDATE_PHOTO_SUCCESS,
  PROFILE_UPDATE_PHOTO_FAILURE,
  PROFILE_UPDATE_NAME_REQUEST,
  PROFILE_UPDATE_NAME_SUCCESS,
  PROFILE_UPDATE_NAME_FAILURE
} from './types'

export const profileSetPhoto = (payload: { photoURL: string }): ProfileActionTypes => ({
  type: PROFILE_SET_PHOTO,
  payload
})

export const profileUpdatePhotoRequest = (payload: { photoUri: string, uid?: string}): ProfileActionTypes => ({
  type: PROFILE_UPDATE_PHOTO_REQUEST,
  payload
})

export const profileUpdatePhotoSuccess = (payload: { photoUrl: string}): ProfileActionTypes => ({
  type: PROFILE_UPDATE_PHOTO_SUCCESS,
  payload
})

export const profileUpdatePhotoFailure = (error: string): ProfileActionTypes => ({
  type: PROFILE_UPDATE_PHOTO_FAILURE,
  error
})

export const profileUpdateNameRequest = (payload: { name: string}): ProfileActionTypes => ({
  type: PROFILE_UPDATE_NAME_REQUEST,
  payload
})

export const profileUpdateNameSuccess = (payload: { displayName: string }): ProfileActionTypes => ({
  type: PROFILE_UPDATE_NAME_SUCCESS,
  payload
})

export const profileUpdateNameFailure = (error: string): ProfileActionTypes => ({
  type: PROFILE_UPDATE_NAME_FAILURE,
  error
})