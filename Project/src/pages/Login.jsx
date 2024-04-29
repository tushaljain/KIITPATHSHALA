import loginImg from "../assets/Images/asimage.png"
import Template from "../components/core/Auth/Template"

function Login() {
  return (
    <Template
      title="Welcome Back Kiitians"
      description1="Build skills for today, tomorrow, and beyond."
      description2="Education: The key to unlock your potential."
      image={loginImg}
      formType="login"
    />
  )
}

export default Login

