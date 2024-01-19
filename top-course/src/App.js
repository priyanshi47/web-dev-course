import React, { useEffect, useState } from "react";
import Navbar from './Navbar';
import Filter from './Filter';
import Cards from './Cards';
import { apiUrl, filterData } from "./data";
import { toast } from "react-toastify";
import Spinner from './Spinner';

const App=()=> {
  const [courses, setCourses] = useState(null);
  const [loading, setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);
  useEffect( ()=> {
    
    const fetchData= async()=>{
      setLoading(true);
      try{
        const res = await fetch(apiUrl);
        const output = await res.json();
        setCourses(output.data);
      }
      catch(error){
        toast.error("something not correct!!");
      }
      setLoading(false);
    }
    fetchData();
  },[]);
  return (
    <div className="flex flex-col h-screen ">
       <Navbar></Navbar>
       <div className="bg-bgDark2">
       <Filter filterData={filterData}category={category} setCategory={setCategory}></Filter>
       <div className="w-11/12 max-w[1200px] mx-auto flex justify-center items-center min-h-[100vh] flex-wrap">
       {loading ? (<Spinner></Spinner>) : (<Cards courses={courses} category= {category}></Cards>)}
       </div>
       </div>
       
       
    </div>
   
  );
};

export default App;
