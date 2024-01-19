import React from "react";
import { useState } from "react";
import { toast } from "react-hot-toast";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { Link, useNavigate } from 'react-router-dom';

const LoginForm = ({setLogin}) => {

  const nav = useNavigate();
  const [formData, setFormdata] = useState({ email: "", password: "" });
  
  const [showPassword, setshowPassword] = useState(false);
  
  function changeHandler(event) {
    setFormdata((prev) => (
    {
        ...prev,
        [event.target.name]: event.target.value
    }
    ));
  }
  function submitHandler(event){
    event.preventDefault();
    setLogin(true);
    toast.success("Logged In");
    nav("/dashboard");
  }
  return (
    <div>
      <form onSubmit={submitHandler}
      className=" p-10 mt-5">
        <label >
          <p className="font-bold text-[#024f4f]">
            E-Mail Address
            <sup className="text-[red]">*</sup>
          </p>

          <input
          className="p-1 bg-[#d1edf576] w-[100%] rounded-lg"
            type="email"
            required
            value={formData.email}
            onChange={changeHandler}
            placeholder="Enter email"
            name="email"
          />
        </label>
        <label>
          <p className="text-[#135555] font-bold">
            Password
            <sup className="text-[red]">*</sup>
          </p>
          <div className="relative">
          <input className="p-1 bg-[#d1edf576] w-[100%] rounded-lg"
            type={showPassword ? "text" : "password"}
            required
            value={formData.password}
            onChange={changeHandler}
            placeholder="Enter password"
            name="password"
          />

          <span className="absolute top-2 right-1 cursor-pointer"
            onClick={() => {
              setshowPassword((prevValue) => !prevValue);
            }}
          >
            {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
          </span>
</div>
<div className="flex justify-end">


          <Link to="#"
          className="text-[#0f3f47]">
            <p className="text-[12px]  font-semibold">Forgot Password</p>
          </Link>
</div>
        </label>

        <button className="bg-cyan-950 text-[#ffffff] p-2 rounded-md w-[100%] mt-5 shadow-md">Sign In</button>
      </form>
    </div>
  );
};

export default LoginForm;
