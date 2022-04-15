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
  isFetching: false,
  isFetched: false,
  isLogedIn: false,
  user: {
    email: ''
  },
  error: null
}

export const userReducer = (state = initialState, action: UserActionTypes): UserState => {
  switch (action.type) {
    case USER_SIGNIN:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      }
    case USER_SIGNUP: {
      return {
        ...state,
        isFetching: true,
        isFetched: false
      }
    }
    case USER_LOGOUT:
      return {
        ...state,
        isFetching: true,
        isFetched: false
      }
    case USER_SUCCESS:
      return {
        ...state,
        isFetched: true,
        isFetching: false,
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