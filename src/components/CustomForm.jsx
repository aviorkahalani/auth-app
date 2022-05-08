import React from 'react'
import { useForm } from '../hooks/useForm'

export const CustomForm = ({ onFormSubmit, children }) => {
  const [userCred, handleChange, setUserCred] = useForm({
    email: 'admin@admin.com',
    password: 'admin90',
  })

  return (
    <form onSubmit={(ev) => onFormSubmit(ev, userCred)} className="form">
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
          value={userCred.email}
          onChange={handleChange}
        />
      </div>
      <div className="form-control">
        <label htmlFor="password" className="form-label">
          Password
        </label>
        <input
          id="password"
          type="password"
          className="form-input"
          name="password"
          value={userCred.password}
          onChange={handleChange}
        />
      </div>
      <button className="btn px-3">{children}</button>
    </form>
  )
}
