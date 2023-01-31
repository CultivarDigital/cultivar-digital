import { initializeApp } from 'firebase/app'
import { getAnalytics } from 'firebase/analytics'

import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
  isSignInWithEmailLink,
  signInWithEmailLink,
  sendPasswordResetEmail,
  updatePassword,
  reauthenticateWithCredential,
  EmailAuthProvider,
} from 'firebase/auth'

export default ({ app, store }, inject) => {
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID,
  }

  // eslint-disable-next-line no-console
  const firebase = initializeApp(firebaseConfig)
  if (process.client) {
    getAnalytics(firebase)
  }

  let firebaseAuth = null

  const auth = () => {
    if (!firebaseAuth) {
      firebaseAuth = getAuth()
      firebaseAuth.languageCode = 'pt-BR'
    }
    return firebaseAuth
  }

  const getUser = () => {
    return auth().currentUser
  }

  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth(), email, password)
  }

  const login = (email, password) => {
    return signInWithEmailAndPassword(auth(), email, password)
  }

  const loginWithPopup = (provider) => {
    return signInWithPopup(auth(), provider)
  }
  const loginWithGoogle = () => {
    const provider = new GoogleAuthProvider()
    // provider.addScope('https://www.googleapis.com/auth/contacts.readonly')
    return loginWithPopup(provider)
  }

  const validateLoginWithEmail = async (href) => {
    if (isSignInWithEmailLink(auth(), href)) {
      let email = await app.$localForage.getItem('emailForSignIn')
      if (!email) {
        email = window.prompt('Informe seu email para continuar')
      }
      return signInWithEmailLink(auth(), email, href).then(() => {
        app.$localForage.setItem('emailForSignIn', null)
      })
    }
  }

  const resetPassword = (email) => {
    return sendPasswordResetEmail(auth(), email)
  }

  const setPassword = (email, currentPassword, newPassword) => {
    const credentials = EmailAuthProvider.credential(email, currentPassword)

    const user = getUser()

    return reauthenticateWithCredential(user, credentials).then(() => {
      return updatePassword(user, newPassword)
    })
  }

  const logout = () => {
    return signOut(auth()).then(() => {
      firebaseAuth = null
    })
  }

  inject('firebase', {
    register,
    login,
    loginWithGoogle,
    validateLoginWithEmail,
    resetPassword,
    setPassword,
    logout,
    getUser,
  })
}
