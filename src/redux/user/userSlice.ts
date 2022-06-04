import { createDraftSafeSelector, createSelector, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { signIn, signUp, logout } from './thunks'

export interface UserState {
  user: {
    displayName: string | null
    photoURL: string | null
  }
  isLogedIn: boolean
  loading: boolean
  error: string
}

const initialState: UserState = {
  user: {
    displayName: '',
    photoURL: ''
  },
  loading: false,
  isLogedIn: false,
  error: ''
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    
  },
  extraReducers: builder => {
    builder.addCase(signIn.pending, state => {
      state.loading = true
    })
    builder.addCase(signIn.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
      state.isLogedIn = true
    })
    builder.addCase(signIn.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload.errorMessage
    })
    builder.addCase(signUp.pending, state => {
      state.loading = true
    })
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.user = action.payload
      state.loading = false
      state.isLogedIn = true
    })
    builder.addCase(signUp.rejected, (state, action) => {
      state.loading = false
      state.error = action.payload.errorMessage
    })
    builder.addCase(logout.fulfilled, state => {
      state.user = {
        displayName: null,
        photoURL: null
      }
      state.isLogedIn = false
    })
  }
})

const selectSelf = (state: UserState) => state
export const selectUser = createSelector(selectSelf, state => state.user)
export const selectIsUserLogedIn = createSelector(selectSelf, state => {
  console.log('INSIDE SELECTOR')
  console.log(state)
  return state
})
export const selectUserLoading = createDraftSafeSelector(selectSelf, state => state.loading)
export const selectUserError = createDraftSafeSelector(selectSelf, state => state.error)

export default userSlice.reducer

