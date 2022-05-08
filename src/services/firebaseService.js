import { initializeApp } from 'firebase/app'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

export const firebaseService = {
  getCurrentUser,
  signup,
  login,
  logout,
}

const app = initializeApp({
  apiKey: 'AIzaSyB-uL620eR4XRJ71ihwnCpz33CfdOpKX3o',
  authDomain: 'auth-app-13ed6.firebaseapp.com',
  projectId: 'auth-app-13ed6',
  storageBucket: 'auth-app-13ed6.appspot.com',
  messagingSenderId: '813223452094',
  appId: '1:813223452094:web:311b8f9ac7463bb4fc6def',
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
