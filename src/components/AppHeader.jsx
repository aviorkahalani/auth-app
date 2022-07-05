import React, { useState } from 'react'
import { Dropdown } from './Dropdown'
import { FaAngleDown, FaAngleUp } from 'react-icons/fa'
import { SiAuth0 } from 'react-icons/si'

export const AppHeader = ({ user, onLogout }) => {
  const [isShown, setIsShown] = useState(false)

  const handleClick = () => {
    setIsShown(!isShown)
  }

  return (
    <header className="main-header flex justify-between items-center">
      <div className="logo flex gap-1 items-center">
        <SiAuth0 />
        AuthApp
      </div>
      <section onClick={() => handleClick()}>
        <div className="user-info flex gap-1 items-center">
          <img
            className="user__photo"
            src={
              user.photoURL
                ? user.photoURL
                : new URL('../assets/user.png', import.meta.url).href
            }
            alt=""
          />
          <p>{user.displayName}</p>
          {isShown ? <FaAngleUp /> : <FaAngleDown />}
        </div>
        {isShown && <Dropdown onLogout={onLogout} />}
      </section>
    </header>
  )
}
