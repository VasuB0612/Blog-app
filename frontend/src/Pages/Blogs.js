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
      if (data) {
        setBlogs(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div>
      {blogs &&
        blogs.map((blog) => (
          <div>
            <BlogCards
              key={blog._id}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              username={blog.user.username}
              when={blog.createdAt.slice(0, 10)}
            />
          </div>
        ))}
    </div>
  );
};

export default Blogs;
