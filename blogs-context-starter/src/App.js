import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";


import { Route, Routes, useSearchParams } from "react-router-dom";
import { useLocation } from "react-router-dom";
import Home from './components/Home'
import BlogPage from "./components/BlogPage";
import TagPage from "./components/TagPage";
import CategoryPage from "./components/CategoryPage";

export default function App() {
  const { fetchBlogPost, darkMode } = useContext(AppContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const location = useLocation();

  useEffect(() => {
    const page =  searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")) {
      //iska matlab tag wala page show krna h 
      const tag = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPost(Number(page), tag);
    }
    else if(location.pathname.includes("categories")) {
      const category = location.pathname.split("/").at(-1).replaceAll("-"," ");
      fetchBlogPost(Number(page), null, category);
    }
    else {
      fetchBlogPost(Number(page));
    }
  }, [location.pathname, location.search]);

  return (
    <div className={darkMode ? ("bg-gray-800 text-white w-screen  h-full"):("bg-white text-black")} >
       <Routes>
      <Route path="/" element = {<Home/>}   />
      <Route path="/blog/:blogId" element = {<BlogPage/>}   />
      <Route path="/tags/:tag" element = {<TagPage/>}   />
      <Route path="/categories/:category" element = {<CategoryPage/>}   />
    </Routes>
    </div>
   
  );
}
