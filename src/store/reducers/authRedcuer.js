const INITIAL_STATE = {
  user: null,
}

export const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case 'LOGIN_USER':
      return { ...state, user: action.user }

    case 'SIGNUP_USER':
      return { ...state, user: action.user }

    case 'LOGOUT_USER':
      return { ...state, user: action.user }

    default:
      return state
  }
}
