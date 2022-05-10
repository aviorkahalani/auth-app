import { useNavigate } from 'react-router-dom'

export const ProfilePage = () => {
  let navigate = useNavigate()

  return (
    <div>
      <h1>ProfilePage</h1>
      <button onClick={() => navigate('/')}>Go back</button>
    </div>
  )
}
