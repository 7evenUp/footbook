import { Middleware } from 'redux'
import { RootState } from '../index'
import { PROFILE_UPDATE_PHOTO_REQUEST, PROFILE_UPDATE_NAME_REQUEST, ProfileActionTypes} from './types'
import {
  profileUpdatePhotoSuccess,
  profileUpdatePhotoFailure,
  profileUpdateNameSuccess,
  profileUpdateNameFailure
} from './actions'
import { ref, uploadBytes, getDownloadURL } from 'firebase/storage'
import { updateProfile } from 'firebase/auth'
import { storage, auth } from '../../firebase/firebaseConfig'

export const profileMiddleware: Middleware<{}, RootState> = store => next => async (action: ProfileActionTypes) => {
  const result = next(action)

  console.log('=================== INSIDE PROFILE MIDDLEWARE ===================')

  if (action.type === PROFILE_UPDATE_PHOTO_REQUEST) {
    const { photoUri, uid } = action.payload
    const dotIndex = photoUri.lastIndexOf('.')
    const ext = photoUri.substr(dotIndex + 1)

    const blob: Blob = await new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest()
      xhr.onload = function () {
        resolve(xhr.response)
      };
      xhr.onerror = function (e) {
        console.log(e)
        reject(new TypeError('Network request failed'))
      };
      xhr.responseType = 'blob'
      xhr.open('GET', photoUri, true)
      xhr.send(null)
    });

    const storageRef = ref(storage, `users/${uid}/profilePhoto.${ext}`)
    const snapshot = await uploadBytes(storageRef, blob)
    // const snapshot = await ref1.put(blob)
    const downloadURL = await getDownloadURL(snapshot.ref)
    // const downloadURL = await snapshot.ref1.getDownloadURL()

    if (auth.currentUser) {
      updateProfile(auth.currentUser, {
        photoURL: downloadURL
      })
      .then(() => store.dispatch(profileUpdatePhotoSuccess({ photoUrl: downloadURL })))
      .catch(error => {
        const errorCode = error.code
        const errorMessage = error.message
        store.dispatch(profileUpdatePhotoFailure(`${errorMessage} === Error code: ${errorCode}`))
        console.error("Error: " + error)
      })
    }
  }

  return result
}