import React, {useState, useEffect} from 'react';
import reviews from './data';
import Card from './Card';

import {FaLessThan,FaGreaterThan} from 'react-icons/fa';
const Testimonials = (props) => {
const [index, setIndex] = useState(0);
  function leftShiftHandler(){
    if(index -1 < 0){
      setIndex(reviews.length-1);
    }
    else{
      setIndex(index -1);
    }
    
  }
  function rightShiftHandler(){
    if(index +1 >= reviews.length){
      setIndex(0);
    }
    else{
      setIndex(index +1);
    }
  }
  function surpriseHandler(){
    let randomInteger = Math.floor(Math.random() * reviews.length);
    setIndex(randomInteger);
  }
    let review = props.reviews;
  return (
    <div className='bg-white w-[65vw] rounded-md flex flex-col justify-center p-10 hover:shadow-md transition-all duration-200'>
       <Card review= {reviews[index]}></Card>
      
        <div className='flex gap-3 text-violet-400 mt-5 justify-center'>
            <button onClick={leftShiftHandler}  className='cursor-pointer hover:text-violet-500'> <FaLessThan></FaLessThan> </button>
            <button onClick={rightShiftHandler} className='cursor-pointer hover:text-violet-500'>
                <FaGreaterThan></FaGreaterThan>
            </button>
        </div>
        <div>
            <button   onClick={surpriseHandler} className='bg-violet-400 hover:bg-violet-500 transition-all duration-200 cursor-pointer px-10 py-2 rounded-md font-bold text-white mt-7'>Surprise Me</button>
        </div>
    </div>
  )
}

export default Testimonials;