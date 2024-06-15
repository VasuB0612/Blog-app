import React, { useState } from "react";
import { Box, Typography, InputLabel, TextField, Button } from "@mui/material";
import TextareaAutosize from "@mui/material/TextareaAutosize";

const CreateBlog = () => {
  const [information, setInformation] = useState({
    title: "",
    description: "",
    image: "",
  });
  const handleSubmit = (e) => {
    e.preventDefault();
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
          <TextField />
          <InputLabel sx={{ mb: 1, mt: 2, fontSize: "24px" }}>
            Image URL
          </InputLabel>
          <TextField />
          <InputLabel sx={{ mb: 1, mt: 2, fontSize: "24px" }}>
            Description
          </InputLabel>
          <textarea
            placeholder="Write here"
            name=""
            id=""
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
            style={{
              marginTop: "7px",
              textTransform: "none",
              backgroundColor: "hotpink",
              padding: "7px",
              mt: 2,
              borderRadius: "10px",
              border: "2px dashed black",
              transition: "background-color 0.5s ease",
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
