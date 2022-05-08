import './styles/styles.scss'
import { firebaseService } from './services/firebaseService'

import { SignupPage } from './views/SignupPage'
import { LoginPage } from './views/LoginPage'

const App = () => {
  const onSignup = async (userCred) => {
    await firebaseService.signup(userCred)
  }

  const onLogin = async (userCred) => {
    await firebaseService.login(userCred)
  }

  return (
    <div className="app-container container">
      <SignupPage onSignup={onSignup} />
      {/* <LoginPage onLogin={onLogin} /> */}
    </div>
  )
}

export default App
