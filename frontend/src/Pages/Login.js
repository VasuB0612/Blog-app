import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

const Login = () => {
  return (
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
      <TextField label="Email" variant="outlined" sx={{ width: 300 }} />
      <TextField
        label="Password"
        type="password"
        variant="outlined"
        sx={{ width: 300 }}
      />
      <Button
        variant="contained"
        sx={{ backgroundColor: "#006400", color: "#FFE4C4" }}
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
  );
};

export default Login;
