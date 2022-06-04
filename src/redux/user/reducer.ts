import {
  UserState,
  UserActionTypes,
  USER_SIGNIN,
  USER_SIGNUP,
  USER_LOGOUT,
  USER_SUCCESS,
  USER_FAILURE
} from './types'

const initialState: UserState = {
  user: {
    displayName: '',
    photoURL: ''
  },
  loading: false,
  isLogedIn: false,
  error: ''
}

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case USER_SIGNIN:
      return {
        ...state,
        loading: true
      }
    case USER_SIGNUP: {
      return {
        ...state,
        loading: true,
      }
    }
    case USER_LOGOUT:
      return {
        ...state,
        loading: true,
      }
    case USER_SUCCESS:
      return {
        ...state,
        isFetched: true,
        loading: false,
        isLogedIn: action.payload.isLogedIn,
        user: action.payload.user
      }
    case USER_FAILURE:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
        error: action.error
      }
    default: return state
  }
}