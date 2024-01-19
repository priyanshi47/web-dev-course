import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'


const Footer = () => {

const{page, handlePgeChange, totalPages, darkMode} = useContext(AppContext);

  return (
   
    <div className={darkMode ? ("flex justify-around  border-t-4 p-2 items-center fixed bottom-0 w-screen bg-black text-white"):("flex justify-around  border-t-4 p-2 items-center fixed bottom-0 w-screen bg-white text-black")}>
     <div className='flex gap-5'>
     { page > 1 &&
      <button  className={darkMode ? ('bg-black text-white p-1 rounded-md border-2 '):('bg-slate-100 p-1 rounded-md border-2 ')} onClick={() => handlePgeChange(page-1)}>Previous</button>
     }
     {
      page < totalPages &&
      <button className={darkMode ? ('bg-black text-white p-1 rounded-md border-2 '):('bg-slate-100 p-1 rounded-md border-2 ')} onClick={()=> handlePgeChange(page+1)}>Next</button>
     }
     </div>

     <div>
      <p className='font-bold'>Page {page} of {totalPages}</p>
     </div>
    </div>
   
  
  )
}

export default Footer