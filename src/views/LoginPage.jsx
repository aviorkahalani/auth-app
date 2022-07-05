import { CustomForm } from '../components/CustomForm'
import { ProvidersAuth } from '../components/ProvidersAuth'

export const LoginPage = ({ onLogin, setIsLogin, onGoogleAuth, onGithubAuth }) => {
  const onFormSubmit = (ev, userCred) => {
    ev.preventDefault()
    onLogin(userCred)
  }

  return (
    <section className="login flex flex-col gap-2 py-3">
      <h3 className="login__title">Login</h3>
      <CustomForm onFormSubmit={onFormSubmit}>Login</CustomForm>
      <ProvidersAuth onGoogleAuth={onGoogleAuth} onGithubAuth={onGithubAuth} />
      <p className="login__signup text-center">
        Don't have an account yet? {''}
        <span onClick={() => setIsLogin(false)}>Register</span>
      </p>
    </section>
  )
}
