import { CustomForm } from '../components/CustomForm'

export const LoginPage = ({ onLogin }) => {
  const onFormSubmit = (ev, userCred) => {
    ev.preventDefault()
    onLogin(userCred)
  }

  return (
    <section className="login flex flex-col gap-2">
      <h3>Login</h3>
      <CustomForm onFormSubmit={onFormSubmit}>Login</CustomForm>
    </section>
  )
}
