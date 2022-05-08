import { useState } from 'react'
import { firebaseService } from './services/firebaseService'

import { SignupPage } from './views/SignupPage'
import { LoginPage } from './views/LoginPage'
import { AppHeader } from './components/AppHeader'

const App = () => {
  const [isLogin, setIsLogin] = useState(true)
  const [user, setUser] = useState(null)

  const onSignup = async (userCred) => {
    const user = await firebaseService.signup(userCred)
    setUser(user)
  }

  const onLogin = async (userCred) => {
    const user = await firebaseService.login(userCred)
    setUser(user)
  }

  const onLogout = async () => {
    await firebaseService.logout()
    setUser(null)
  }

  return (
    <div className="app-container container">
      {user && <AppHeader user={user} onLogout={onLogout} />}
      <section>
        {isLogin ? (
          <LoginPage onLogin={onLogin} setIsLogin={setIsLogin} />
        ) : (
          <SignupPage onSignup={onSignup} setIsLogin={setIsLogin} />
        )}
      </section>
    </div>
  )
}

export default App
