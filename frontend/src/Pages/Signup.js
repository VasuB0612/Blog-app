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
        gap={2}
        bgcolor="#d0f0c0"
      >
        <Typography variant="h4" sx={{ color: "#006400" }}>
          Sign up
        </Typography>
        <TextField
          label="Username"
          name="username"
          variant="outlined"
          sx={{ width: 300 }}
          value={credentials.name}
          onChange={handleChange}
        />
        <TextField
          label="Email"
          name="email"
          variant="outlined"
          sx={{ width: 300 }}
          value={credentials.email}
          onChange={handleChange}
        />
        <TextField
          label="Password"
          name="password"
          type="password"
          variant="outlined"
          sx={{ width: 300 }}
          value={credentials.password}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#006400", color: "#FFE4C4" }}
          onClick={handleSubmission}
        >
          Sign up
        </Button>
        <Link
          href="/login"
          sx={{ color: "#006400", textDecoration: "none" }}
          marginTop={2}
        >
          Already have an account? Login here.
        </Link>
      </Box>
    </form>
  );
};

export default Signup;
