export interface User {
  email: string
}

export interface UserState {
  user: {
    displayName: string | null
    photoURL: string | null
  }
  isLogedIn: boolean
  loading: boolean
  error: string
}

export const USER_SIGNIN = 'USER_SIGNIN'
export const USER_SIGNUP = 'USER_SIGNUP'
export const USER_LOGOUT = 'USER_LOGOUT'
export const USER_SUCCESS = 'USER_SUCCESS'
export const USER_FAILURE = 'USER_FAILURE'

interface UserSignInAction {
  type: typeof USER_SIGNIN
  payload: {
    email: string,
    password: string
  }
}

interface UserSignUpAction {
  type: typeof USER_SIGNUP
}

interface UserLogoutAction {
  type: typeof USER_LOGOUT
}

interface UserSuccessAction {
  type: typeof USER_SUCCESS
  payload: {
    user: User,
    isLogedIn: boolean
  }
}

interface UserFailureAction {
  type: typeof USER_FAILURE
  error: string
}

export type UserActionTypes = UserSignInAction | UserSignUpAction | UserLogoutAction | UserSuccessAction | UserFailureAction