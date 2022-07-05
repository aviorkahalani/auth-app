import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
import { useEffect } from 'react'

export const ProfilePage = () => {
  const { user } = useSelector((state) => state.authModule)
  let navigate = useNavigate()

  useEffect(() => {
    if (!user) navigate('/')
  }, [user])

  // const getImage = () => {
  //   const url = new URL(user.providerData[0].photoURL, import.meta.url).href
  //   console.log('url', url)
  //   return url
  // }

  if (!user) return <div>Loading...</div>
  return (
    <section className="profile flex flex-col gap-2 py-3">
      <div className="profile__description">
        <h1 className="__title">Personal info</h1>
        <p className="__description">Basic info, like your name and photo</p>
      </div>
      <main className="profile__info flex flex-col py-3">
        <div className="flex justify-between items-center">
          <div className="__general">
            <h3 className="__title">Profile</h3>
            <p className="__description">Some info may be visible to other people</p>
          </div>
          <button className="btn-edit" onClick={() => navigate('/profile/edit')}>
            Edit
          </button>
        </div>

        <div className="profile__photo">
          <p>photo</p>
          <img
            className="__img"
            src={
              user.providerData[0].photoURL
                ? user.providerData[0].photoURL + '?q=2'
                : new URL('../assets/user.png', import.meta.url).href
            }
            alt=""
          />
        </div>
        <div className="profile__name">
          <p>name</p>
          <p className="info">{user.displayName || 'info not provided.'}</p>
        </div>

        <div className="profile__phone">
          <p>phone</p>
          <p className="info">{user.providerData[0].phoneNumber || 'info not provided.'}</p>
        </div>
        <div className="profile__email">
          <p>email</p>
          <p className="info">{user.email}</p>
        </div>
      </main>

      {/* <button onClick={() => navigate('/')}>Go back</button> */}
    </section>
  )
}
