import { 
  User,
  UserActionTypes,
  USER_SIGNIN,
  USER_SIGNUP,
  USER_LOGOUT,
  USER_SUCCESS,
  USER_FAILURE
} from './types'

export const userSignIn = (payload: { email: string, password: string}):UserActionTypes => ({
  type: USER_SIGNIN,
  payload
})

export const userSignUp = ():UserActionTypes => ({
  type: USER_SIGNUP
})

export const userLogout = ():UserActionTypes => ({
  type: USER_LOGOUT
})

export const userSuccess = (payload: { user: User, isLogedIn: boolean }):UserActionTypes => ({
  type: USER_SUCCESS,
  payload
})

export const userFailure = (error: string):UserActionTypes => ({
  type: USER_FAILURE,
  error
})