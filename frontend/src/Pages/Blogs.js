import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCards from "../Components/BlogCards";
import "../Styles/card.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { id } = userInfo;
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        "http://localhost:8000/api/blogs/all-blogs"
      );
      if (data) {
        setBlogs(data);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getAllBlogs();
  }, []);

  return (
    <div className="card_container">
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <BlogCards
            blogId={blog._id}
            isUser={id === blog.user._id}
            title={blog.title}
            description={blog.description}
            image={blog.image}
            username={blog.user.username}
            when={blog.createdAt.slice(0, 10)}
          />
        ))
      ) : (
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            border: "2px solid black",
            borderRadius: "30px",
            marginTop: "20px",
            padding: "40px",
            fontFamily: "'Pixelify Sans', sans-serif",
          }}
        >
          <h1>No blogs yet</h1>
        </div>
      )}
    </div>
  );
};

export default Blogs;
