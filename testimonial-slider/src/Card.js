import React from 'react'
import {ImQuotesLeft, ImQuotesRight} from 'react-icons/im';
const Card = (props) => {
    let review = props.review;
  return (
    <div className=' flex flex-col md:relative '>
    <div className='absolute top-[-7rem] z-10 mx-auto'>
        <img className='aspect-square rounded-full z-[25] w-[140px] h-[140px] ' src={review.image}/>
    <div className='w-[140px] bg-violet-500 rounded-full absolute top-[-6px] h-[140px]  left-[10px] z-[-10]'></div>

    </div>
    <div className='text-center mt-7 '>
        <p className='font-bold text-2xl capitalize'>{review.name}</p>
    </div>
    <div className='text-center mt-7'>
        <p className='text-violet-300 uppercase text-small'>{review.job}</p>
    </div>
    <div>
    <ImQuotesLeft className='text-violet-400 mx-auto mt-5'></ImQuotesLeft>
    </div>
    <div className='text-center mt-4 text-slate-500'>
        <p >{review.text}</p>
        </div>
     
        
      
        <div>
            <ImQuotesRight className='text-violet-400 mx-auto mt-5'></ImQuotesRight>
        </div>
    </div>
    

    
    
  )
}

export default Card