import axios from "axios";
import React, { useState, useEffect } from "react";
import UserBlogCards from "../Components/UserBlogCards";
import "../Styles/card.css";
import { Typography, Dialog, DialogContent, DialogTitle } from "@mui/material";

const UserBlogs = () => {
  const [userBlogs, setUserBlogs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [open, setOpen] = useState(false);
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { id } = userInfo;
  const getBlogs = async () => {
    try {
      const { data } = await axios.get(
        `https://blog-backend-pfb0.onrender.com/api/blogs/userBlog/${id}`
      );
      if (data) {
        setUserBlogs(data);
        console.log(data);
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

  const handleOpen = (bog) => {
    setSelectedBlog(bog);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedBlog(null);
  };

  return (
    <div className="card_container">
      {loading ? (
        <p>Loading...</p>
      ) : userBlogs && userBlogs.length > 0 ? (
        userBlogs.map((bog) => (
          <div key={bog._id} onClick={() => handleOpen(bog)}>
            <UserBlogCards
              blogId={bog._id}
              isUser={id === bog.user._id}
              title={bog.title}
              description={bog.description}
              image={bog.image}
              username={bog.user.username}
              when={bog.createdAt.slice(0, 10)}
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

export default UserBlogs;
