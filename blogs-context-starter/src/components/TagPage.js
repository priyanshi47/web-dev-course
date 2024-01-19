import React, { useContext } from 'react'
import Header from './Header'
import { useLocation, useNavigate } from 'react-router-dom'
import Footer from './Footer'
import Blogs from './Blogs'
import { AppContext } from '../context/AppContext'


const TagPage = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const tag = location.pathname.split("/").at(-1);
    const{darkMode} = useContext(AppContext);
  return (
    <div>
    <Header/>
       <button className={darkMode ? ("bg-black text-white p-1 rounded-md border-2 ml-[25vw] mt-[65px]"): ("bg-slate-100 p-1  mt-[65px] rounded-md border-2 ml-[25vw]")} onClick={()=> navigate(-1)}>Back</button> 
       <h2>
        <span className='font-bold ml-[25vw] text-3xl'>Blogs tagged  <span className='text-[blue]'> #{tag}</span></span>
      
       </h2>
<Blogs/>
<Footer/>
    </div>
  )
}

export default TagPage