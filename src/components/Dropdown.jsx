import React from 'react'
import { Link } from 'react-router-dom'
import { FaSignOutAlt, FaRegUser } from 'react-icons/fa'

export const Dropdown = ({ onLogout }) => {
  return (
    <div className="dropdown flex flex-col ">
      <div className="__profile flex items-center gap-1">
        <FaRegUser />
        <Link to="profile">
          <span>My Profile</span>
        </Link>
      </div>
      <div className="__divider"></div>
      <div className="__logout flex items-center gap-1" onClick={() => onLogout()}>
        <FaSignOutAlt />
        <span>Logout</span>
      </div>
    </div>
  )
}
