import { Middleware } from 'redux'
import { RootState } from '../index'
import { USER_SIGNIN, USER_LOGOUT, USER_SIGNUP } from './types'
import { userSuccess, userFailure} from './actions'
import { signInWithEmailAndPassword, createUserWithEmailAndPassword, signOut } from 'firebase/auth'
import { auth } from '../../firebase/firebaseConfig'
import Constants from "expo-constants"

export const userFetchingMiddleware: Middleware<{}, RootState> = store => next => action => {
  const result = next(action)
  const email = Constants.manifest?.extra?.myEmail
  const password = Constants.manifest?.extra?.myPassword

  console.log('=================== INSIDE USER MIDDLEWARE ===================')

  if (action.type === USER_SIGNIN) {
    // firebase.auth().signInWithEmailAndPassword(action.payload.email, action.payload.password)
    signInWithEmailAndPassword(auth, email, password)
      .then(() => store.dispatch(userSuccess({ user: { email: email }, isLogedIn: true })))
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode === 'auth/wrong-password') {
          store.dispatch(userFailure('Wrong password.'))
        } else {
          store.dispatch(userFailure(errorMessage))
        }
        console.error("Error: " + error)
    })
  }

  if (action.type === USER_SIGNUP) {
    createUserWithEmailAndPassword(auth, email, password)
      .then(() => store.dispatch(userSuccess({ user: { email: email }, isLogedIn: true })))
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        if (errorCode === 'auth/wrong-password') {
          store.dispatch(userFailure('Wrong password.'))
        } else {
          store.dispatch(userFailure(`${errorCode}: ${errorMessage}`))
        }
        console.error("Error: " + error)
      })
  }

  if (action.type === USER_LOGOUT) {
    signOut(auth)
      .then(() => store.dispatch(userSuccess({ user: {email: ''}, isLogedIn: false })))
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        store.dispatch(userFailure(`${errorMessage} === Error code: ${errorCode}`))
        console.error("Error: " + error)
      })
  }

  return result;
}