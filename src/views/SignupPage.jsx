import { CustomForm } from '../components/CustomForm.jsx'
import { ProvidersAuth } from '../components/ProvidersAuth.jsx'

export const SignupPage = ({ onSignup, setIsLogin, onGoogleAuth, onGithubAuth }) => {
  const onFormSubmit = (ev, userCred) => {
    ev.preventDefault()
    onSignup(userCred)
  }

  return (
    <section className="signup flex flex-col gap-2 py-3">
      <h3 className="signup__title">Join thousands of learners from around the world</h3>
      <p className="signup__description">
        Master web development by making real-life projects. There are multiple paths for you
        to choose
      </p>
      <CustomForm onFormSubmit={onFormSubmit}>Start coding now</CustomForm>
      <ProvidersAuth onGoogleAuth={onGoogleAuth} onGithubAuth={onGithubAuth} />
      <p className="signup__login">
        Already a member? {''}
        <span onClick={() => setIsLogin(true)}>Login</span>
      </p>
    </section>
  )
}
