import { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { signup, login, logout } from './store/actions/authActions.js'

import { SignupPage } from './views/SignupPage'
import { LoginPage } from './views/LoginPage'
import { AppHeader } from './components/AppHeader'
import { ProfilePage } from './views/ProfilePage'
import { ProfileEditPage } from './views/ProfileEditPage.jsx'

const App = () => {
  const [isLogin, setIsLogin] = useState(true)
  const { user } = useSelector((state) => state.authModule)
  const dispatch = useDispatch()
  let navigate = useNavigate()

  useEffect(() => {
    if (user) navigate('/profile')
  }, [user])

  const onSignup = async (userCred) => {
    dispatch(signup(userCred))
  }

  const onLogin = async (userCred) => {
    dispatch(login(userCred))
  }

  const onLogout = async () => {
    dispatch(logout())
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
        <Route path="/profile/edit" element={<ProfileEditPage />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  )
}

export default App
