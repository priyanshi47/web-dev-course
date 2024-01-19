
import axios from 'axios';
import { useEffect, useState } from 'react'

const API_KEY = '7ntSHIy1aX35oqRAVR7AS7lHzJqlDg2x';

const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;



const useGif = (tag) => {


    const [gif, createGif] = useState("");

    const [loading, setLoading] = useState(false);
  
 
  
      async function fetchData(tag){
        setLoading(true);
      
        const {data} = await axios.get(tag ? `${url}&tag=${tag}` : url);
  
        const imgSrc = data.data.images.downsized_large.url;
        createGif(imgSrc);
        setLoading(false);
        // console.log(imgSrc);
      }
  
    useEffect(()=>{
      fetchData();
    },[]);
  return {gif, loading, fetchData};
}

export default useGif;