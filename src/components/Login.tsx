import { Ref, RefObject, useEffect, useRef } from 'react'
import { GoMail, GoLock } from 'react-icons/go'
import Socials from './Socials'

const Login = () => {
  const inputElem = useRef<HTMLInputElement>(null)

  useEffect(() => {
    inputElem.current?.focus()
  }, [])

  return (
    <div className="">
      <p className="my-3 font-bold">
        Join thousands of learners from <br /> around the world
      </p>
      <p className="my-3 font-light">
        Master web development by making real-life <br /> projects. There are
        multiple paths for you to <br />
        choose
      </p>
      <form>
        <div className="focus-within:border-blue-400 transition-colors flex items-center p-3 border rounded gap-4 mb-3">
          <label htmlFor="email" className="text-xl text-gray-500 ">
            <GoMail />
          </label>
          <input
            ref={inputElem}
            className="flex-1 outline-none"
            id="email"
            name="email"
            type="email"
            autoComplete="off"
            placeholder="Email"
          />
        </div>
        <div className="focus-within:border-blue-400 transition-colors flex items-center p-3 border rounded gap-4 mb-3">
          <label htmlFor="password" className="text-xl text-gray-500">
            <GoLock />
          </label>
          <input
            className="flex-1 outline-none"
            id="password"
            name="password"
            type="password"
            placeholder="password"
          />
        </div>

        <button className="bg-[#2F80ED] text-white rounded-md w-full mt-2 p-1">
          Start coding now
        </button>
      </form>

      <div className="my-3">
        <p className="text-gray-500 font-light text-center">
          or continue with these social profile
        </p>
        <Socials />
        <p className="text-gray-500 font-light text-center">
          Already a memeber?{' '}
          <button className="text-sky-500 hover:underline">Login</button>
        </p>
      </div>
    </div>
  )
}

export default Login
