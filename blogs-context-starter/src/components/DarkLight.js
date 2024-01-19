import React, { useContext } from 'react'
import {BsMoon, BsSun} from 'react-icons/bs';
import { AppContext } from '../context/AppContext';

const DarkLight = () => {
   const{darkMode, setDarkMode} = useContext(AppContext);

    function clickHandler(){
        setDarkMode((prev)=> !prev);
    }

   
  return (
    <span className='   cursor-pointer ml-2' onClick={clickHandler}>
        {
            darkMode ? (<p> <BsSun fontSize={30}/> </p> ) : ( <p><BsMoon fontSize={30}/> </p>)
        }
     </span>
  )
}

export default DarkLight;