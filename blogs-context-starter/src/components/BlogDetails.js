import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AppContext } from "../context/AppContext";

const BlogDetails = ({ post }) => {
  const {darkMode} = useContext(AppContext);
  return (
    <div className={darkMode ? ("w-[50%] mt-3 bg-black text-white p-3 rounded-md"):("w-[50%] mt-3 bg-white text-black")}>
      <NavLink to={`/blog/${post.id}`}>
        <span className="font-bold ">{post.title}</span>
      </NavLink>
      <p>
        By
        <span> {post.author} </span>
        on
        <NavLink to={`/categories/${post.category.replaceAll(" ", "-")}`}>
          <span className="font-bold underline"> {post.category} </span>
        </NavLink>
      </p>
      <p>
        Posted on <span>{post.date}</span>
      </p>
      <p>{post.content}</p>
      <div>
        {post.tags.map((tag, index) => (
          <NavLink key={index} to={`/tags/${tag.replaceAll(" ", "-")}`}>
            <span className="text-[blue] mr-3">{`#${tag}`}</span>
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default BlogDetails;
