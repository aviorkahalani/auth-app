import React from 'react'
import { Link } from 'react-router-dom'

export const Dropdown = ({ onLogout }) => {
  return (
    <div className="dropdown flex flex-col ">
      <div className="__profile">
        <Link to="profile">My Profile</Link>
      </div>
      <div className="__divider"></div>
      <div className="__logout" onClick={() => onLogout()}>
        Logout
      </div>
    </div>
  )
}
