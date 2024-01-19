import React from 'react'
import Template from '../components/Template'
import Signupimg from '../assets/signup.jpg';

const Signup = ({setLogin}) => {
  return (
    <div>
      <Template
      title="Join our community "
      desc1="Get excellent study notes for free and ecxel in life!!"
      
        image={Signupimg}
        formtype="signup"
        setLogin={setLogin}
        />
    </div>
  )
}

export default Signup;