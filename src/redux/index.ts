import { combineReducers, createStore, applyMiddleware, compose } from 'redux'
import { userReducer } from './user/reducer'
import { userFetchingMiddleware } from './user/middlewares'
import { profileMiddleware } from './profile/middlewares'
import { profileReducer } from './profile/reducer'

export const rootReducer = combineReducers({
  user: userReducer,
  profile: profileReducer
})

export type RootState = ReturnType<typeof rootReducer>

export const createAppStore = () => {

  const store = createStore(
    rootReducer,
    compose(
      applyMiddleware(userFetchingMiddleware),
      applyMiddleware(profileMiddleware),
    )
  )

  return store
}