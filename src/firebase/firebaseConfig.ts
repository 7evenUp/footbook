import { initializeApp, getApp, getApps } from "firebase/app"
import { getAuth, onAuthStateChanged } from "firebase/auth"
import { getStorage } from "firebase/storage"
import { getFirestore } from "firebase/firestore"
import Constants from "expo-constants"

const config = Constants.manifest?.extra?.firebaseConfig

export const firebaseApp = getApps().length ? getApp() : initializeApp(config)
export const db = getFirestore()
export const auth = getAuth(firebaseApp)
export const storage = getStorage(firebaseApp)

onAuthStateChanged(auth, user => {
  console.log("STATE CHANGED")
  if (user) {
    console.log('Logged IN')
    console.log(user.email)
  }
  else {
    console.log('Loged out')
  }
})