import { React, useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { Box, Typography, InputLabel, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";
import "../Styles/textarea.css";

const EditBlog = () => {
  const [blog, setBlog] = useState([]);
  const navigate = useNavigate();
  const id = useParams().id;
  const [information, setInformation] = useState({});

  const getBlog = async () => {
    try {
      const { data } = await axios.get(
        `https://blog-backend-pfb0.onrender.com/api/blogs/fetch/${id}`
      );
      if (data) {
        setBlog(data);
        setInformation({
          title: data.title,
          description: data.description,
          image: data.image,
        });
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(information);
    try {
      const { data } = await axios.put(
        `https://blog-backend-pfb0.onrender.com/api/blogs/update/${id}`,
        {
          title: information.title,
          image: information.image,
          description: information.description,
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

  useEffect(() => {
    getBlog();
  }, [id]);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Box
          width="60%"
          border="2px solid #1ac130"
          borderRadius={10}
          padding={3}
          margin="auto"
          display="flex"
          flexDirection="column"
          marginTop="30px"
          sx={{
            "@media (max-width: 600px)": {
              width: "80%",
            },
          }}
        >
          <Typography
            variant="h2"
            textAlign="center"
            padding={3}
            sx={{ fontFamily: "'Pixelify Sans', sans-serif", color: "#1ac130" }}
          >
            Start editing
          </Typography>
          <InputLabel sx={{ mb: 1, mt: 2, fontSize: "24px", color: "#1ac130" }}>
            Title
          </InputLabel>
          <TextField
            name="title"
            value={information.title}
            onChange={handleChange}
            variant="outlined"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#1ac130",
                },
                "&:hover fieldset": {
                  borderColor: "#1ac130",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1ac130",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#1ac130",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#1ac130",
              },
              "& .MuiOutlinedInput-input": {
                color: "white", // placeholder text color
                fontFamily: "'Pixelify Sans', sans-serif",
              },
            }}
            InputLabelProps={{
              style: { color: "#1ac130" },
            }}
            InputProps={{
              style: { color: "#1ac130" },
            }}
          />
          <InputLabel sx={{ mb: 1, mt: 2, fontSize: "24px", color: "#1ac130" }}>
            Image URL
          </InputLabel>
          <TextField
            name="image"
            value={information.image}
            onChange={handleChange}
            variant="outlined"
            required
            sx={{
              "& .MuiOutlinedInput-root": {
                "& fieldset": {
                  borderColor: "#1ac130",
                },
                "&:hover fieldset": {
                  borderColor: "#1ac130",
                },
                "&.Mui-focused fieldset": {
                  borderColor: "#1ac130",
                },
              },
              "& .MuiInputLabel-root": {
                color: "#1ac130",
              },
              "& .MuiInputLabel-root.Mui-focused": {
                color: "#1ac130",
              },
              "& .MuiOutlinedInput-input": {
                color: "white", // placeholder text color
                fontFamily: "'Pixelify Sans', sans-serif",
              },
            }}
            InputLabelProps={{
              style: { color: "#1ac130" },
            }}
            InputProps={{
              style: { color: "#1ac130" },
            }}
          />
          <InputLabel sx={{ mb: 1, mt: 2, fontSize: "24px", color: "#1ac130" }}>
            Description
          </InputLabel>
          <textarea
            placeholder="Write here"
            name="description"
            value={information.description}
            onChange={handleChange}
            rows={10}
            columns={10}
            class="custom-scrollbar"
          ></textarea>
          <button
            type="submit"
            style={{
              fontSize: "17px",
              marginTop: "7px",
              textTransform: "none",
              backgroundColor: "rgb(30, 30, 30)",
              padding: "7px",
              mt: 2,
              borderRadius: "10px",
              transition: "background-color 0.5s ease",
              fontFamily: "'Pixelify Sans', sans-serif",
              color: "#1ac130",
            }}
            onMouseOver={(e) => {
              e.target.style.backgroundColor = "black";
              e.target.style.color = "#1ac130";
            }}
            onMouseOut={(e) => {
              e.target.style.backgroundColor = "rgb(30, 30, 30)";
              e.target.style.color = "#1ac130";
            }}
          >
            Update
          </button>
        </Box>
      </form>
    </div>
  );
};

export default EditBlog;
