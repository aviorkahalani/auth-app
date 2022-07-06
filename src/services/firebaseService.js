import { initializeApp } from 'firebase/app'
// import { getStorage } from 'firebase/storage'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  updateProfile,
  updateEmail,
  updatePassword,
  GoogleAuthProvider,
  signInWithPopup,
  GithubAuthProvider,
} from 'firebase/auth'
const {
  VITE_APP_FIREBASE_API_KEY,
  VITE_APP_FIREBASE_AUTH_DOMAIN,
  VITE_APP_FIREBASE_PROJECT_ID,
  VITE_APP_FIREBASE_STORAGE_BUCKET,
  VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  VITE_APP_FIREBASE_APP_ID,
} = import.meta.env

export const firebaseService = {
  getCurrentUser,
  signup,
  login,
  logout,
  update,
  googleAuth,
  githubAuth,
}

const app = initializeApp({
  // apiKey: VITE_APP_FIREBASE_API_KEY,
  // authDomain: VITE_APP_FIREBASE_AUTH_DOMAIN,
  // projectId: VITE_APP_FIREBASE_PROJECT_ID,
  // storageBucket: VITE_APP_FIREBASE_STORAGE_BUCKET,
  // messagingSenderId: VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  // appId: VITE_APP_FIREBASE_APP_ID,
  apiKey: 'AIzaSyB-uL620eR4XRJ71ihwnCpz33CfdOpKX3o',
  authDomain: 'auth-app-13ed6.firebaseapp.com',
  projectId: 'auth-app-13ed6',
  storageBucket: 'auth-app-13ed6.appspot.com',
  messagingSenderId: '813223452094',
  appId: '1:813223452094:web:311b8f9ac7463bb4fc6def',
})

// const storage = getStorage(app)
const auth = getAuth(app)
const googleProvider = new GoogleAuthProvider()
const githubProvider = new GithubAuthProvider()

async function getCurrentUser() {
  return auth.currentUser
}

async function signup({ email, password }) {
  try {
    const { user } = await createUserWithEmailAndPassword(auth, email, password)
    return user
  } catch (err) {
    console.error(err)
  }
}

async function login({ email, password }) {
  try {
    const { user } = await signInWithEmailAndPassword(auth, email, password)
    return user
  } catch (err) {
    console.error(err)
  }
}

async function logout() {
  try {
    await signOut(auth)
  } catch (err) {
    console.error(err)
  }
}

async function update(updatedFields) {
  try {
    const { displayName, photoURL, phoneNumber, email, password } = updatedFields
    if (password) await updatePassword(auth.currentUser, password)
    await updateProfile(auth.currentUser, { displayName, photoURL, phoneNumber })
    await updateEmail(auth.currentUser, email)
  } catch (err) {
    console.error(err)
  }
}

async function googleAuth() {
  try {
    const result = await signInWithPopup(auth, googleProvider)
    const credential = GoogleAuthProvider.credentialFromResult(result)
    // const token = credential.accessToken
    // The signed-in user info.
    const user = result.user
    return user
  } catch (err) {
    console.error(err)
  }
}

async function githubAuth() {
  try {
    const result = await signInWithPopup(auth, githubProvider)
    const credential = GithubAuthProvider.credentialFromResult(result)
    // const token = credential.accessToken
    // The signed-in user info.
    const user = result.user
    return user
  } catch (err) {
    console.error(err)
  }
}
