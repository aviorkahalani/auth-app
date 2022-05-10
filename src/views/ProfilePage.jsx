import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export const ProfilePage = () => {
  const { user } = useSelector((state) => state.authModule)
  let navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/')
  }, [user])

  return (
    <div>
      <h1>ProfilePage</h1>
      <pre>{JSON.stringify(user, null, 2)}</pre>
      <button onClick={() => navigate('/')}>Go back</button>
    </div>
  )
}
