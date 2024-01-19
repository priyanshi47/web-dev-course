import React from 'react'
import {FcLike,FcLikePlaceholder} from "react-icons/fc";
import { toast } from 'react-toastify';
const Card = (props) => {
let course = props.course;
let likedCourses= props.likedCourses;
let setLikedCourses = props.setLikedCourses;
  function clickHandler(){
    if(likedCourses.includes(course.id)){
      setLikedCourses((prev)=> prev.filter( (cid) =>(cid !== course.id)));
      toast.warning("like removed");
    }
    else{
      if(likedCourses.length === 0){
        setLikedCourses([course.id]);
      }
      else{
        setLikedCourses((prev)=>[...prev, course.id]);
      }
      toast.success("Liked Successfully");
    }
  }
  return (
    <div className='w-[300px] bg-bgDark rounded-md overflow-hidden bg-opacity-80'>
    <div className='relative'>
    <img src={course.image.url}  ></img>
    
        
        <div className='rounded-full absolute bg-white w-[40px] h-[40px] right-1 grid place-items-center'>
            <button  onClick={clickHandler}>
            {likedCourses.includes(course.id) ? (<FcLike fontSize="1.75rem"></FcLike>):(<FcLikePlaceholder fontSize="1.75rem"></FcLikePlaceholder>)
            }
    
            </button>
        </div>
    <div>
            <p className='text-white font-bold p-4'>{course.title}</p>
            <p className='text-white mt-2 p-4'>{
              course.description.length >100 ? (`${course.description.substr(0,100)}...`):(course.description)

              }</p>
        </div>
    </div>
    </div>
  )
}

export default Card;