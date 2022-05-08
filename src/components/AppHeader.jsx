import React from 'react'

export const AppHeader = ({ user, onLogout }) => {
  return (
    <header className="main-header flex justify-between">
      <div className="logo">AuthApp</div>
      <div className="user-info">
        <p>{user.email}</p>
        <button onClick={() => onLogout()}>Logout</button>
      </div>
    </header>
  )
}
