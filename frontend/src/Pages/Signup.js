import React from "react";
import { Box, Typography, TextField, Button, Link } from "@mui/material";

const Signup = () => {
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
        Sign up
      </Typography>
      <TextField label="Username" variant="outlined" sx={{ width: 300 }} />
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
  );
};

export default Signup;
