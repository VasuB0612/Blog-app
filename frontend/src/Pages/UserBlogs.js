import axios from "axios";
import React, { useState, useEffect } from "react";
import BlogCards from "../Components/BlogCards";
import "../Styles/card.css";
import { useBlog } from "../Context/BlogProvider";

const UserBlogs = () => {
  const [userBlogs, setUserBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const getBlogs = async () => {
    try {
      const userInfo = JSON.parse(localStorage.getItem("userInfo"));
      const { id } = userInfo;
      const { data } = await axios.get(
        `http://localhost:8000/api/blogs/userBlog/${id}`
      );
      if (data) {
        setUserBlogs(data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getBlogs();
  }, []);

  return (
    <div className="card_container">
      {loading ? (
        <p>Loading...</p>
      ) : userBlogs && userBlogs.length > 0 ? (
        userBlogs.map((bog) => (
          <BlogCards
            title={bog.title}
            description={bog.description}
            image={bog.image}
            username={bog.user.username}
            when={bog.createdAt.slice(0, 10)}
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

export default UserBlogs;
