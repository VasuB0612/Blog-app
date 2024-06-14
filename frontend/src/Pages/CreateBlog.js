import React, { useState } from "react";
import { Box, Typography } from "@mui/material";

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
        </Box>
      </form>
    </div>
  );
};

export default CreateBlog;
