import React, { useState } from 'react'
import { Dropdown } from './Dropdown'

export const AppHeader = ({ user, onLogout }) => {
  const [isShown, setIsShown] = useState(false)

  const handleClick = () => {
    setIsShown(!isShown)
  }

  return (
    <header className="main-header flex justify-between items-center">
      <div className="logo">AuthApp</div>
      <section onClick={() => handleClick()}>
        <div className="user-info flex gap-1 items-center">
          <img className="user__photo" src={user.photoURL} alt="" />
          <p>{user.displayName}</p>
        </div>
        {isShown && <Dropdown onLogout={onLogout} />}
      </section>
    </header>
  )
}
