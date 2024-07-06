import React, { useState, useEffect } from "react";
import axios from "axios";
import BlogCards from "../Components/BlogCards";
import { Typography, Dialog, DialogContent, DialogTitle } from "@mui/material";
import "../Styles/card.css";

const Blogs = () => {
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [open, setOpen] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { id } = userInfo;
  const getAllBlogs = async () => {
    try {
      const { data } = await axios.get(
        "https://blog-backend-pfb0.onrender.com/api/blogs/all-blogs"
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

  const handleOpen = (blog) => {
    setSelectedBlog(blog);
    setOpen(true);
  };

  const handleClose = (blog) => {
    setOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="card_container">
      {blogs && blogs.length > 0 ? (
        blogs.map((blog) => (
          <div onClick={() => handleOpen(blog)}>
            <BlogCards
              blogId={blog._id}
              isAdmin={id === "6689176ff9b5b9800aa3e25b"}
              title={blog.title}
              description={blog.description}
              image={blog.image}
              username={blog.user.username}
              when={blog.createdAt.slice(0, 10)}
              removeBlog={setBlogs}
            />
          </div>
        ))
      ) : (
        <div
          style={{
            width: "40%",
            display: "flex",
            justifyContent: "center",
            margin: "auto",
            border: "2px solid #1ac130",
            borderRadius: "30px",
            marginTop: "20px",
            padding: "40px",
            fontFamily: "'Pixelify Sans', sans-serif",
          }}
        >
          <h1 style={{ color: "#1ac130" }}>No blogs yet</h1>
        </div>
      )}

      {selectedBlog && (
        <Dialog open={open} onClose={handleClose} fullWidth maxWidth="md">
          <DialogTitle sx={{ backgroundColor: "#1D1D1D", color: "bisque" }}>
            {selectedBlog.title}
          </DialogTitle>
          <DialogContent
            sx={{
              backgroundColor: "#1d1d1d",
              "&::-webkit-scrollbar": {
                width: "8px",
              },
              "&::-webkit-scrollbar-track": {
                background: "#1d1d1d",
              },
              "&::-webkit-scrollbar-thumb": {
                background: "#888",
                borderRadius: "10px",
              },
              "&::-webkit-scrollbar-thumb:hover": {
                background: "#555",
              },
            }}
          >
            <img
              src={selectedBlog.image}
              alt={selectedBlog.title}
              style={{ width: "100%", maxHeight: "300px", objectFit: "cover" }}
            />
            <Typography
              variant="body1"
              style={{ marginTop: "20px", padding: "20px", color: "bisque" }}
            >
              {selectedBlog.description}
            </Typography>
          </DialogContent>
        </Dialog>
      )}
    </div>
  );
};

export default Blogs;
