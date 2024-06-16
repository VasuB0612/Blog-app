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
      const { data } = await axios.post(
        "http://localhost:8000/api/users/login",
        config
      );
      if (data) {
        const { id, email, token } = data;

        const userInfo = {
          id: id,
          email: email,
          token: token,
        };

        localStorage.setItem("userInfo", JSON.stringify(userInfo));
        setUser(userInfo);
        console.log(userInfo);
        navigate("/blogs");
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
        borderRadius="10%"
        gap={2}
        bgcolor="#745E96"
      >
        <Typography
          variant="h4"
          sx={{ color: "hotpink", fontFamily: "'Pixelify Sans', sans-serif" }}
        >
          Login
        </Typography>
        <TextField
          name="email"
          value={credentials.email}
          label="Email"
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
              color: "white",
              fontFamily: "'Pixelify Sans', sans-serif",
            },
          }}
          InputLabelProps={{
            style: { color: "hotpink" },
          }}
          InputProps={{
            style: { color: "hotpink" },
          }}
          onChange={handleChange}
        />
        <TextField
          name="password"
          value={credentials.password}
          label="Password"
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
          // marginTop={}
        >
          Login
        </Button>
        <Link
          href="/register"
          sx={{
            color: "hotpink",
            textDecoration: "none",
            fontFamily: "Pixelify Sans, sans-serif",
          }}
          marginTop={2}
        >
          Don't have an account? Sign up here.
        </Link>
      </Box>
    </form>
  );
};

export default Login;
