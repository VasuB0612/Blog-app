import axios from "axios";
import React, { useState, useEffect } from "react";
import BlogCards from "../Components/BlogCards";
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
    <div>
      {loading ? (
        <p>Loading...</p>
      ) : userBlogs && userBlogs.length > 0 ? (
        userBlogs.map((bog) => (
          <div key={bog._id}>
            <BlogCards
              title={bog.title}
              description={bog.description}
              image={bog.image}
              username={bog.user.username}
              when={bog.createdAt.slice(0, 10)}
            />
          </div>
        ))
      ) : (
        <h1>No blogs yet</h1>
      )}
    </div>
  );
};

export default UserBlogs;
