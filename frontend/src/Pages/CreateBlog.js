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
      <form onSubmit={handleSubmit(e)}>
        <Box width="80%">
          <Typography variant="h2">Create a Post</Typography>
        </Box>
      </form>
    </div>
  );
};

export default CreateBlog;
