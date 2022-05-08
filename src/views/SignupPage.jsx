import { CustomForm } from '../components/CustomForm.jsx'

export const SignupPage = ({ onSignup, setIsLogin }) => {
  const onFormSubmit = (ev, userCred) => {
    ev.preventDefault()
    onSignup(userCred)
  }

  return (
    <section className="signup flex flex-col gap-2">
      <h3>Join thousands of learners from around the world</h3>
      <p>
        Master web development by making real-life projects. There are multiple paths for you
        to choose
      </p>
      <CustomForm onFormSubmit={onFormSubmit}>Start coding now</CustomForm>
      <p>
        Already a member?{' '}
        <span className="clr-teal" onClick={() => setIsLogin(true)}>
          Login
        </span>
      </p>
    </section>
  )
}
