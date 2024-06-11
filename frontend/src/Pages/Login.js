import { React, useState } from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../Context/BlogProvider";
import axios from "axios";

const Login = () => {
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });
  const { user, setUser } = useBlog();
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
        email: credentials.email,
        password: credentials.password,
      };
      const response = await axios.post(
        "http://localhost:8000/api/users/login",
        config
      );
      if (response.data) {
        const { email, token } = response.data;

        const userInfo = {
          email: email,
          token: token,
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        setUser(userInfo);
        console.log(userInfo);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
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
          Login
        </Typography>
        <TextField
          name="email"
          value={credentials.email}
          label="Email"
          variant="outlined"
          sx={{ width: 300 }}
          onChange={handleChange}
        />
        <TextField
          name="password"
          value={credentials.password}
          label="Password"
          type="password"
          variant="outlined"
          sx={{ width: 300 }}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          sx={{ backgroundColor: "#006400", color: "#FFE4C4" }}
          type="submit"
        >
          Login
        </Button>
        <Link
          href="/register"
          sx={{ color: "#006400", textDecoration: "none" }}
          marginTop={2}
        >
          Don't have an account? Sign up here.
        </Link>
      </Box>
    </form>
  );
};

export default Login;
