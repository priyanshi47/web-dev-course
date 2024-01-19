import React, { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const SignupForm = ({ setLogin }) => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowCinfirmPassword] = useState(false);
 const [accType, setAccType] = useState("student");

  function changeHandler(event) {
    setFormData((prevData) => ({
      ...prevData,
      [event.target.name]: event.target.value,
    }));
  }

  function submitHandler(event) {
    event.preventDefault();

    if (formData.password != formData.confirmPassword) {
      toast.error("Password Not Match");
      return;
    }

    setLogin(true);
    toast.success("Account Created!");
    const allData = {
        ...formData,
        accType
    }
    console.log(allData);
    navigate("/dashboard");
  }

  return (
    <div>
      <div className="flex gap-3">
        <button
        className={
            accType === "student" ? ("p-1 bg-[#d1edf576] rounded-md text-[#024f4f] mt-4"): ("text-[#024f4fae]  font-inter mt-4")
        }
        onClick={() => setAccType("student")}
        >Student</button>
        <button
          className={
            accType === "instructor" ? ("p-1 bg-[#d1edf576] rounded-md text-[#046464] mt-4"): ("text-[#024f4f8e]  font-inter mt-4")
          }
          onClick={()=>setAccType("instructor")}
          >Instructor</button>
      </div>

      <form className=" p-1 mt-5 "
      onSubmit={submitHandler}>
        <div className="flex gap-8">
          <label>
            <p className="font-bold text-[#024f4f]">
              First Name<sup className="text-[red]">*</sup>
            </p>
            <input
             className="p-1 bg-[#d1edf576] w-[100%] rounded-lg"
              required
              type="text"
              name="firstName"
              onChange={changeHandler}
              placeholder="Enter First Name"
              value={formData.firstName}
            />
          </label>

          <label>
            <p className="font-bold text-[#024f4f]">
              Last Name<sup className="text-[red]">*</sup>
            </p>
            <input
             className="p-1 bg-[#d1edf576] w-[100%] rounded-lg"
              required
              type="text"
              name="lastName"
              onChange={changeHandler}
              placeholder="Enter Last Name"
              value={formData.lastName}
            />
          </label>
        </div>

        <label>
          <p className="font-bold text-[#024f4f]">
            Email Address<sup className="text-[red]">*</sup>
          </p>
          <input
           className="p-1 bg-[#d1edf576] w-[100%] rounded-lg"
            required
            type="email"
            name="email"
            onChange={changeHandler}
            placeholder="Enter Email Address "
            value={formData.email}
          />
        </label>

        <div>
          <label>
            <p className="font-bold text-[#024f4f]">
              Create Password<sup className="text-[red]">*</sup>
            </p>
            <div className="relative">

            
            <input
             className="p-1 bg-[#d1edf576] w-[100%] rounded-lg"
              required
              type={showPassword ? "text" : "password"}
              name="password"
              onChange={changeHandler}
              placeholder="Enter Password"
              value={formData.password}
            />
            <span
            className="absolute top-2 right-1 cursor-pointer" 
            onClick={() => setShowPassword((prev) => !prev)}>
              {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
            </span>
            </div>
          </label>

          <label>
            <p className="font-bold text-[#024f4f]">
              Confirm Password<sup className="text-[red]">*</sup>
            </p>
            <div className="relative">

            
            <input
             className="pt-1 bg-[#d1edf576] w-[100%] rounded-lg"
              required
              type={showConfirmPassword ? "text" : "password"}
              name="confirmPassword"
              onChange={changeHandler}
              placeholder="Confirm Password"
              value={formData.confirmPassword}
            />
            <span
            className="absolute top-2 right-1"
             onClick={() => setShowCinfirmPassword((prev) => !prev)}>
              {showConfirmPassword ? (
                <AiOutlineEyeInvisible />
              ) : (
                <AiOutlineEye />
              )}
            </span>
            </div>
          </label>
        </div>
        <button className="bg-cyan-950 text-[#ffffff] p-2 rounded-md w-[100%] mt-5 shadow-md">Create Account</button>
      </form>
    </div>
  );
};

export default SignupForm;
