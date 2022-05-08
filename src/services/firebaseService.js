import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
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
}

const app = initializeApp({
  apiKey: VITE_APP_FIREBASE_API_KEY,
  authDomain: VITE_APP_FIREBASE_AUTH_DOMAIN,
  projectId: VITE_APP_FIREBASE_PROJECT_ID,
  storageBucket: VITE_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: VITE_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: VITE_APP_FIREBASE_APP_ID,
})

const auth = getAuth(app)

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
