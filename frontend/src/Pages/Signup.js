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
        bgcolor="rgb(36, 35, 40)"
      >
        <Typography
          variant="h4"
          sx={{ color: "#1ac130", fontFamily: "'Pixelify Sans', sans-serif" }}
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
              color: "white",
              fontFamily: "'Pixelify Sans', sans-serif",
            },
          }}
          InputLabelProps={{
            style: { color: "#1ac130" },
          }}
          InputProps={{
            style: { color: "#1ac130" },
          }}
          value={credentials.password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          sx={{
            backgroundColor: "#301934",
            color: "#1ac130",
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
            color: "#1ac130",
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
