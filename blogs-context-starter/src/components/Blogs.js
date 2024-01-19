import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Spinner from './Spinner';
import BlogDetails from './BlogDetails';
import DarkLight from './DarkLight';



const Blogs = () => {
    const {posts,loading} = useContext(AppContext);
   

  return (
    <div className='flex justify-center flex-col items-center mt-[65px]  mb-[70px] ' >
    
    <DarkLight />

      {
        loading ?

         (<Spinner/>): 

        (
            
                posts.length === 0 ? 
                (<div>
                <p>
                No posts Found
                </p>
                </div>):
                ( posts.map( (post) => {
                  return (
                  <BlogDetails key={post.id} post={post}/>
                  )
                   
                }
                )
                    
        )
      )}
    </div>
  )
}

export default Blogs;