import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../context/AppContext';
import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Header from '../components/Header';
import BlogDetails from '../components/BlogDetails';
import Spinner from './Spinner';
import DarkLight from './DarkLight';

const BlogPage = () => {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const[relatedblogs, setRelatedBlogs] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const {setLoading, loading, darkMode} = useContext(AppContext);

    const blogId = location.pathname.split("/").at(-1);

    async function fetchRelatedBlogs() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
        console.log("URL is: ");
        console.log(url);
        try {
            const res = await fetch(url);
            const data = await res.json();
            
            setBlog(data.blog);
            setRelatedBlogs(data.relatedBlogs);
        }
        catch(error) {
            console.log("Error aagya in blog id wali call");
            setBlog(null);
            setRelatedBlogs([]);
        }
        setLoading(false);
    }

    useEffect( () => {
        if(blogId) {
            fetchRelatedBlogs();
        }
    }, [location.pathname] )

  return (
    <div>
      <Header/>
      <div className='mt-[75px] ml-[25vw] flex h-full'>
    
        <button className={darkMode ? ("bg-black text-white p-1 rounded-md border-2"): ("bg-slate-100 p-1 rounded-md border-2")}
        onClick={() => navigation(-1)}
        >
            Back
        </button>
        <DarkLight/>
      </div>
      {
        loading ?
        (<div>
           <Spinner/>
        </div>) :
        blog ?
        (<div  className='ml-[30vw]'>
            <BlogDetails post={blog} />
            <h2 className='font-bold uppercase text-2xl mt-6'> Related Blogs </h2>
            {
                relatedblogs.map( (post) => (
                    <div key = {post.id}>
                        <BlogDetails post={post} />
                    </div>
                ) )
            }

        </div>) :
        (<div>
            <p>No Blog Found</p>
        </div>)
       
      }


    </div>
  )
}

export default BlogPage;