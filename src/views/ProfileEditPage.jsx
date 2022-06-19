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
    <section className="profile-edit-page">
      <div className="title">
        <h3>Change Info</h3>
        <p>Changes will be reflected to every services</p>
      </div>

      <form onSubmit={onFormSubmit} className="form">
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
          />
        </div>
        {/* <div className="form-control">
          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            id="password"
            type="password"
            className="form-input"
            autoComplete="off"
            name="password"
            value={userCreds.password}
            onChange={handleChange}
          />
        </div> */}

        <div className="btn-group">
          <button className="px-2">Save</button>
        </div>
      </form>

      <pre>{JSON.stringify(user, null, 2)}</pre>
    </section>
  )
}
