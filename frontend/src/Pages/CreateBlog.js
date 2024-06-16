import React, { useState } from "react";
import { Box, Typography, InputLabel, TextField } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const CreateBlog = () => {
  const navigate = useNavigate();
  const [information, setInformation] = useState({
    title: "",
    image: "",
    description: "",
  });

  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const { id } = userInfo;

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(information);
    try {
      const { data } = await axios.post(
        "http://localhost:8000/api/blogs/create",
        {
          title: information.title,
          image: information.image,
          description: information.description,
          user: id,
        }
      );
      if (data) {
        navigate("/myBlogs");
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setInformation((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          width="60%"
          border={3}
          borderRadius={10}
          padding={3}
          margin="auto"
          display="flex"
          flexDirection="column"
          marginTop="30px"
        >
          <Typography
            variant="h2"
            textAlign="center"
            padding={3}
            sx={{ fontFamily: "'Pixelify Sans', sans-serif" }}
          >
            Create a Post
          </Typography>
          <InputLabel sx={{ mb: 1, mt: 2, fontSize: "24px" }}>Title</InputLabel>
          <TextField
            name="title"
            value={information.title}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <InputLabel sx={{ mb: 1, mt: 2, fontSize: "24px" }}>
            Image URL
          </InputLabel>
          <TextField
            name="image"
            value={information.image}
            onChange={handleChange}
            variant="outlined"
            required
          />
          <InputLabel sx={{ mb: 1, mt: 2, fontSize: "24px" }}>
            Description
          </InputLabel>
          <textarea
            placeholder="Write here"
            name="description"
            value={information.description}
            onChange={handleChange}
            rows={10}
            columns={10}
            style={{
              background: "transparent",
              fontFamily: "'Pixelify Sans', sans-serif",
              fontSize: "20px",
              paddingLeft: "10px",
              paddingTop: "10px",
              color: "black",
            }}
          ></textarea>
          <button
            type="submit"
            style={{
              marginTop: "7px",
              textTransform: "none",
              backgroundColor: "hotpink",
              padding: "7px",
              mt: 2,
              borderRadius: "10px",
              border: "2px dashed black",
              transition: "background-color 0.5s ease",
              fontFamily: "'Pixelify Sans', sans-serif",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "black";
              e.target.style.color = "hotpink";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "hotpink";
              e.target.style.color = "black";
            }}
          >
            Submit
          </button>
        </Box>
      </form>
    </div>
  );
};

export default CreateBlog;
