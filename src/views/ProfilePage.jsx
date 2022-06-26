import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export const ProfilePage = () => {
  const { user } = useSelector((state) => state.authModule)
  let navigate = useNavigate()

  useEffect(() => {
    console.log('user', user)
    if (!user) navigate('/')
  }, [user])

  if (!user) return <div>Loading...</div>
  return (
    <section className="">
      <div className="">
        <h1>Personal info</h1>
        <p>Basic info, like your name and photo</p>
      </div>
      <main className="">
        <div className="">
          <div>
            <h3>Profile</h3>
            <p>Some info may be visible to other people</p>
          </div>
          <button onClick={() => navigate('/profile/edit')}>Edit</button>
        </div>

        <div className="">
          <p>photo</p>
          <img src={user.photoURL} alt="" />
        </div>
        <div className="">
          <p>name</p>
          <p>{user.displayName || 'info not provided.'}</p>
        </div>

        <div className="">
          <p>phone</p>
          <p>{user.providerData.phoneNumber || 'info not provided.'}</p>
        </div>
        <div className="">
          <p>email</p>
          <p>{user.email}</p>
        </div>
      </main>

      <button onClick={() => navigate('/')}>Go back</button>
    </section>
  )
}
