import React, { useState } from 'react';
import Card from './Card';

const Cards = (props) => {
    let courses=props.courses;
    let allCourses=[];
    let category= props.category;
    const [likedCourses, setLikedCourses] = useState([]);
    const getCourses = ()=>{
        if(category=== 'All'){
            Object.values(courses).forEach((courseCategory) =>{
                courseCategory.forEach((course) =>{
                    allCourses.push(course);
                })
            })
             return allCourses;
        }
        else{
            return courses[category];
        }
      

    }
  return (
    <div className='flex flex-wrap justify-center gap-10'>
    {!courses ? (
        <div>
            <p>No data found</p>
        </div>
    ) : (
        getCourses().map((course)=>{
        return <Card course={course} key={course.id} likedCourses={likedCourses} setLikedCourses={setLikedCourses}></Card>;
       })
    )}
     
    </div>
  )
}

export default Cards;