import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from './Spinner';
import useGif from './useGif';

// const API_KEY = '7ntSHIy1aX35oqRAVR7AS7lHzJqlDg2x';
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;
const Tag = () => {
  //   const [gif, createGif] = useState("");

  // const [loading, setLoading] = useState(false);

   const[tag, setTag] = useState('car');

  //   async function fetchData(){
  //     setLoading(true);
  //     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
  //     const {data} = await axios.get(url);

  //     const imgSrc = data.data.images.downsized_large.url;
  //     createGif(imgSrc);
  //     setLoading(false);
  //     // console.log(imgSrc);
  //   }

  // useEffect(()=>{
  //   fetchData();
  // },[]);
const {gif, loading,fetchData} = useGif(tag);

    function clickHandler(){
      fetchData(tag);
    }

    function changeHandler(event){
      setTag(event.target.value);
    }
  return (
    <div className='bg-blue-400 w-fit  h-fit mt-4 rounded-lg border border-black flex flex-col items-center gap-2'>
        <h1 className='underline font-semibold text-center uppercase'> {tag } GIF</h1>
        {
          loading ? (<Spinner/>):( <img src={gif} width="90%" height="80%"></img>)
        }
       <input type="text " placeholder='search gif' className='rounded-md w-[90%] p-2 text-center' onChange={changeHandler}
        value={tag}
       />
        <button 
        className='bg-black w-40 text-white rounded-md p-1 mt-1 outline'
        onClick={clickHandler}>Generate</button>
    </div>
  )
}

export default Tag;