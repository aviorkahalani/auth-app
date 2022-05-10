import { useState } from 'react'
import { firebaseService } from './services/firebaseService'
import { Routes, Route } from 'react-router-dom'

import { SignupPage } from './views/SignupPage'
import { LoginPage } from './views/LoginPage'
import { AppHeader } from './components/AppHeader'
import { ProfilePage } from './views/ProfilePage'

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
      <Routes>
        <Route
          path="/"
          element={
            <section>
              {isLogin ? (
                <LoginPage onLogin={onLogin} setIsLogin={setIsLogin} />
              ) : (
                <SignupPage onSignup={onSignup} setIsLogin={setIsLogin} />
              )}
            </section>
          }
        />
        <Route path="/profile" element={<ProfilePage />}></Route>
      </Routes>
    </div>
  )
}

export default App
