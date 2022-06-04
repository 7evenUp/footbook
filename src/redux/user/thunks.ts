import { createAsyncThunk } from "@reduxjs/toolkit"
import Constants from "expo-constants"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, User, UserCredential } from "firebase/auth"
import { auth } from "../../firebase/firebaseConfig"

interface KnownError {
  errorMessage: string
}

export const signIn = createAsyncThunk<
  { displayName: string | null, photoURL: string | null },
  { email: string, password: string },
  { rejectValue: KnownError }>(
  'user/signIn',
  async ({email, password}, thunkApi) => {
    const email1 = Constants.manifest?.extra?.myEmail
    const password1 = Constants.manifest?.extra?.myPassword

    try {
      const userCredential: UserCredential = await signInWithEmailAndPassword(auth, email1, password1)
      const { displayName, photoURL } = userCredential.user
      return { displayName, photoURL }
    }
    catch (error) {
      const { code, message } = error
      const errorMessage = code === 'auth/wrong-password' ? 'Wrong password.' : message
      return thunkApi.rejectWithValue({errorMessage} as KnownError)
    }
  }
)

export const signUp = createAsyncThunk<
{ displayName: string | null, photoURL: string | null },
{ email: string, password: string },
  { rejectValue: KnownError }>(
  'signUp',
  async ({ email, password }, thunkApi) => {
    try {
      const userCredential: UserCredential = await createUserWithEmailAndPassword(auth, email, password)
      const { displayName, photoURL } = userCredential.user
      return { displayName, photoURL }
    }
    catch (error) {
      const { code, message } = error
      const errorMessage = code === 'auth/wrong-password' ? 'Wrong password.' : message
      return thunkApi.rejectWithValue({errorMessage} as KnownError)
    }
  }
)

export const logout = createAsyncThunk(
  'logout',
  async () => {
    signOut(auth)
  }
)