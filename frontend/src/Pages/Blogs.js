import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCards from "../Components/BlogCards";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/blogs/all-blogs"
      );
      if (data?.success) {
        setBlogs(data?.blogs);
      }
    } catch (error) {}
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  return <div>{blogs && blogs.map((blog) => <BlogCards />)}</div>;
};

export default Blogs;
