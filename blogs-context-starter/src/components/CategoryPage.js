import React, { useContext } from "react";
import Header from "./Header";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "./Footer";
import Blogs from "./Blogs";
import { AppContext } from "../context/AppContext";

const CategoryPage = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const category = location.pathname.split("/").at(-1);
  const{darkMode} = useContext(AppContext);
  return (
    <div>
      <Header />
      <div className="ml-[25vw]">
      <button  onClick={() => navigate(-1)} className={darkMode ? ("bg-black text-white  ml-[25vw] mt-[65px] p-1 rounded-md border-2"): ("bg-slate-100 p-1 rounded-md border-2  ml-[25vw] mt-[65px]")}>
        Back
      </button>
      <h2>
        <span className="font-bold text-3xl ">Blogs on  {category}</span>
       
      </h2>
      </div>
     
      <Blogs />
      <Footer />
    </div>
  );
};

export default CategoryPage;
