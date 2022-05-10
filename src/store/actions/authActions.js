import { firebaseService } from '../../services/firebaseService'

export function signup(userCreds) {
  return async (dispatch) => {
    try {
      const user = await firebaseService.signup(userCreds)
      dispatch({ type: 'SIGNUP_USER', user })
    } catch (err) {
      console.error(err)
    }
  }
}

export function login(userCreds) {
  return async (dispatch) => {
    try {
      const user = await firebaseService.login(userCreds)
      dispatch({ type: 'LOGIN_USER', user })
    } catch (err) {
      console.error(err)
    }
  }
}

export function logout() {
  return async (dispatch) => {
    try {
      const user = await firebaseService.logout()
      dispatch({ type: 'LOGOUT_USER', user: null })
    } catch (err) {
      console.error(err)
    }
  }
}
