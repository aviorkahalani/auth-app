import { useState } from 'react'
import AppHeader from './components/AppHeader'
import Login from './components/Login'
import Register from './components/Register'
import UserProfile from './components/UserProfile'

type State = 'LOGIN' | 'REGISTER'

function App() {
  const [user, setUser] = useState<boolean>(false)
  const [state, setState] = useState<State>('LOGIN')

  return (
    <section className="container mx-auto flex flex-col min-h-screen p-2 md:px-0">
      <AppHeader />
      <div className="flex-1">
        {!user && state === 'LOGIN' ? <Login /> : <Register />}
        {user && <UserProfile />}
      </div>
    </section>
  )
}

export default App
