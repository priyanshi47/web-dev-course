import React from 'react'
// import frame from '../assets/pattern.jpg';
import './Template.css'
import LoginForm from './LoginForm';
import SignUpForm from './SignUpForm';
// import SignupForm from './Signform';
import {FcGoogle} from 'react-icons/fc';
const Template = ({title, desc1,  image, formtype, setLogin}) => {
  return (
    <div className=' template flex flex-wrap justify-evenly mt-10 p-2'>
        <div>
           <h1 className='font-bold uppercase text-[24px] text-[#0c588b]'> {title}</h1>
           <p>
            <span className='text-[#0c588b] text-[14px] font-mono'>{desc1}</span>
          
           </p>
           {formtype === "signup" ?
           (<SignUpForm setLogin={setLogin}/>):(<LoginForm setLogin={setLogin}/>)}

           <div className='flex w-[100%] justify-evenly items-center m-2 '>
            <div className='w-[40%] bg-cyan-950 h-[1px]'></div>
            <p className='text-[#25556d] font-bold '>OR</p>
            <div className='w-[40%] bg-cyan-950 h-[1px] '></div>
           </div>

           <button className='flex gap-3 bg-slate-200 p-3 w-[100%] justify-center font-serif text-[#396f8f] mt-5
           ]'>
           <FcGoogle fontSize={28}/>
            <p>SignUp with Google</p>
           </button>
        </div>

        <div className='relative p-2'>
           
            <img src={image}
          
            className='shadow-lg shadow-[#1a5d6e] rounded-lg'
            alt="books"
           width={350}
            
            ></img>
        </div>
    </div>
  )
}

export default Template;