import {
  ProfileState,
  ProfileActionTypes,
  PROFILE_SET_PHOTO,
  PROFILE_UPDATE_PHOTO_REQUEST,
  PROFILE_UPDATE_PHOTO_SUCCESS,
  PROFILE_UPDATE_PHOTO_FAILURE,
  PROFILE_UPDATE_NAME_REQUEST,
  PROFILE_UPDATE_NAME_SUCCESS,
  PROFILE_UPDATE_NAME_FAILURE
} from './types'

const initialState: ProfileState = {
  isFetching: false,
  profile: {
    photoURL: '',
    displayName: ''
  },
  error: null
}

export const profileReducer = (state = initialState, action: ProfileActionTypes): ProfileState => {
  switch (action.type) {
    case PROFILE_SET_PHOTO:
      return {
        ...state,
        isFetching: false,
        profile: {
          ...state.profile,
          photoURL: action.payload.photoURL
        },
        error: null
      }
    case PROFILE_UPDATE_PHOTO_REQUEST:
      return {
        ...state,
        isFetching: true,
        profile: {
          ...state.profile,
          photoURL: ''
        },
        error: null
      }
    case PROFILE_UPDATE_PHOTO_SUCCESS:
      console.log('inside reducer: ', action.payload.photoUrl)
      return {
        ...state,
        isFetching: false,
        profile: {
          ...state.profile,
          photoURL: action.payload.photoUrl
        },
        error: null
      }
    case PROFILE_UPDATE_PHOTO_FAILURE:
      return {
        ...state,
        isFetching: false,
        profile: {
          ...state.profile,
          photoURL: ''
        },
        error: action.error
      }

    default: return state
  }
}