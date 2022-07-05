import React from 'react'
import { FcGoogle } from 'react-icons/fc'
import { FaGithub } from 'react-icons/fa'

export const ProvidersAuth = ({ onGoogleAuth, onGithubAuth }) => {
  return (
    <div className="providers-auth flex flex-col gap-1 items-center">
      <p>or continue with these social profile</p>
      <div className="providers flex items-center gap-1">
        <button className="btn-provider" onClick={() => onGoogleAuth()}>
          <FcGoogle />
        </button>
        <button className="btn-provider" onClick={() => onGithubAuth()}>
          <FaGithub />
        </button>
      </div>
    </div>
  )
}
