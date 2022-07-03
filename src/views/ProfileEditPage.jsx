import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useForm } from '../hooks/useForm'
import { update } from '../store/actions/authActions.js'

export const ProfileEditPage = () => {
  const { user } = useSelector((state) => state.authModule)
  let dispatch = useDispatch()

  const [userCreds, handleChange, setUserCred] = useForm(null)
  let navigate = useNavigate()

  useEffect(() => {
    setUserCred({
      displayName: user?.providerData[0].displayName || '',
      phoneNumber: user?.providerData[0].phoneNumber || '',
      email: user?.providerData[0].email || '',
      password: '',
      photoURL: user?.providerData[0].photoURL || '',
    })
  }, [])

  const onFormSubmit = (ev) => {
    ev.preventDefault()

    dispatch(update(userCreds))
  }

  useEffect(() => {
    if (!user) navigate('/')
  }, [user])

  if (!user || !userCreds) return <div>Loading...</div>
  return (
    <section className="profile__edit flex flex-col gap-2">
      <div className="__intro">
        <h3 className="intro__title">Change Info</h3>
        <p className="intro__description">Changes will be reflected to every services</p>
      </div>

      <form onSubmit={onFormSubmit} className="form">
        <div className="form-control">
          <label htmlFor="photoURL" className="form-label">
            photoURL
          </label>
          <input
            id="photoURL"
            type="text"
            className="form-input"
            autoComplete="off"
            name="photoURL"
            value={userCreds.photoURL}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="displayName" className="form-label">
            Name
          </label>
          <input
            id="displayName"
            type="text"
            className="form-input"
            autoComplete="off"
            name="displayName"
            value={userCreds.displayName}
            onChange={handleChange}
            placeholder="Enter your full name"
          />
        </div>
        <div className="form-control">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            id="email"
            type="email"
            className="form-input"
            autoComplete="off"
            name="email"
            value={userCreds.email}
            onChange={handleChange}
            placeholder="admin@admin.com"
          />
        </div>

        <div className="form-control">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="text"
            className="form-input"
            autoComplete="off"
            name="password"
            value={userCreds.password}
            onChange={handleChange}
            placeholder="Enter your password"
          />
        </div>
        <div className="btn-group">
          <button className="btn btn-save px-2">Save</button>
        </div>
      </form>
    </section>
  )
}
