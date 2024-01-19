import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'

const Header = () => {
  const {darkMode} = useContext(AppContext);
  return (
    <div>
        <h1 className={darkMode ? ("font-bold uppercase text-center bg-black shadow-lg p-2 text-2xl border-2 fixed top-0 w-screen text-white"):("font-bold uppercase text-center bg-white shadow-lg p-2  text-2xl border-b-2 fixed top-0 w-screen")}>Codehelp Blogs</h1> 
       
        
    </div>
  )
}

export default Header