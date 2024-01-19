import React from 'react'
import Template from '../components/Template';
import LoginImg from '../assets/login.jpeg';
const Login = ({setLogin}) => {
  return (
    <div>
      <Template
        title="Welcome Back"
        desc1="The best notes for your assistance are listed here!!"
      
        image={LoginImg}
        formtype="login"
        setLogin={setLogin}
      />
    </div>
  )
}

export default Login;