import React from 'react'
import logo from '../assets/Logo.svg';
import { Link } from 'react-router-dom';
import { toast } from 'react-hot-toast';

const Navbar = (props) => {
    let login= props.login;
    let setLogin=props.setLogin;
  return (
    <div className='flex justify-evenly bg-cyan-950 p-3 text-[white] flex-wrap'>
 
    <Link to="/">
    <div className='flex items-center '> 
    <img src={logo} alt='logo' loading='lazy' />
            <p className='font-bold uppercase mt-3 text-[#ffFFFF]'>Study Notes</p>
    </div>
           
        </Link>
   
        
        <nav className='mt-6 font-semibold '>
            <ul className='flex gap-5 flex-wrap'>
                <li>
                    <Link className='hover:text-[#FFD300] hover:underline' to="/">
                        Home
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-[#FFD300] hover:underline' to="/about">
                        About
                    </Link>
                </li>
                <li>
                    <Link className='hover:text-[#FFD300] hover:underline' to="/contact">
                        Contact
                    </Link>
                </li>
            </ul>
        </nav>

        <div className='flex gap-5 ml-4 mt-6 font-semibold flex-wrap'>
        
           
             { login &&
                <Link className='hover:text-[#FFD300]' to="/">
                    <button onClick={()=>{
                        setLogin(false);
                        toast.success("Logged out");
                    }}>
                        Log Out
                    </button>
                </Link>
            }
            { login &&
                <Link className='hover:text-[#FFD300]' to="/dashboard">
                    <button>
                        Dashboard
                    </button>
                </Link>
            } 
             {!login &&
                <Link className='hover:text-[#FFD300]' to="/login">
                    <button >
                        Login
                    </button>
                </Link>
            }
            { !login &&
                <Link className='hover:text-[#FFD300]' to="/signup">
                    <button>
                        Sign Up
                    </button>
                </Link>
            }
          
            
        
           
         
        </div>
    </div>
  )
}

export default Navbar;