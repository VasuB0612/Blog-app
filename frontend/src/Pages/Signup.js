import React, { useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const [credentials, setCredentials] = useState({
    username: "",
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setCredentials((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmission = async (e) => {
    e.preventDefault();
    try {
      const config = {
        username: credentials.username,
        email: credentials.email,
        password: credentials.password,
      };
      const response = await axios.post(
        "http://localhost:8000/api/users/register",
        config
      );
      if (response) {
        alert("User registered successfully");
        navigate("/login");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(credentials);
  };

  return (
    <form onSubmit={handleSubmission}>
      <Box
        maxWidth={400}
        height={500}
        display="flex"
        flexDirection="column"
        alignItems="center"
        justifyContent="center"
        margin="auto"
        marginTop={5}
        borderRadius="10%"
        gap={2}
        bgcolor="#745E96"
      >
        <Typography
          variant="h4"
          sx={{ color: "hotpink", fontFamily: "'Pixelify Sans', sans-serif" }}
        >
          Sign up
        </Typography>
        <TextField
          label="Username"
          name="username"
          variant="outlined"
          sx={{
            width: 300,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "hotpink",
              },
              "&:hover fieldset": {
                borderColor: "hotpink",
              },
              "&.Mui-focused fieldset": {
                borderColor: "hotpink",
              },
            },
            "& .MuiInputLabel-root": {
              color: "hotpink",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "hotpink",
            },
            "& .MuiOutlinedInput-input": {
              color: "white", // placeholder text color
              fontFamily: "'Pixelify Sans', sans-serif",
            },
          }}
          InputLabelProps={{
            style: { color: "hotpink" },
          }}
          InputProps={{
            style: { color: "hotpink" },
          }}
          value={credentials.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          sx={{
            width: 300,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "hotpink",
              },
              "&:hover fieldset": {
                borderColor: "hotpink",
              },
              "&.Mui-focused fieldset": {
                borderColor: "hotpink",
              },
            },
            "& .MuiInputLabel-root": {
              color: "hotpink",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "hotpink",
            },
            "& .MuiOutlinedInput-input": {
              color: "white", // placeholder text color
              fontFamily: "'Pixelify Sans', sans-serif",
            },
          }}
          InputLabelProps={{
            style: { color: "hotpink" },
          }}
          InputProps={{
            style: { color: "hotpink" },
          }}
          value={credentials.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          sx={{
            width: 300,
            "& .MuiOutlinedInput-root": {
              "& fieldset": {
                borderColor: "hotpink",
              },
              "&:hover fieldset": {
                borderColor: "hotpink",
              },
              "&.Mui-focused fieldset": {
                borderColor: "hotpink",
              },
            },
            "& .MuiInputLabel-root": {
              color: "hotpink",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "hotpink",
            },
            "& .MuiOutlinedInput-input": {
              color: "white", // placeholder text color
              fontFamily: "'Pixelify Sans', sans-serif",
            },
          }}
          InputLabelProps={{
            style: { color: "hotpink" },
          }}
          InputProps={{
            style: { color: "hotpink" },
          }}
          value={credentials.password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#301934",
            color: "hotpink",
            fontFamily: "'Pixelify Sans', sans-serif",
            textTransform: "none",
          }}
          type="submit"
        >
          Sign up
        </Button>
        <Link
          href="/login"
          sx={{
            color: "hotpink",
            textDecoration: "none",
            fontFamily: "Pixelify Sans, sans-serif",
          }}
          marginTop={2}
        >
          Already have an account? Login here.
        </Link>
      </Box>
    </form>
  );
};

export default Signup;
