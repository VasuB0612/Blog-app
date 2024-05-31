import React from "react";
import { Box, AppBar, Toolbar, Button, Typography } from "@mui/material";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "green" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ color: "bisque" }}>
            Slog
          </Typography>
          <Box display={"flex"} marginLeft="auto">
            <Button sx={{ color: "bisque" }} LinkComponent={Link} to="/login">
              Login
            </Button>
            <Button
              sx={{ color: "bisque" }}
              LinkComponent={Link}
              to="/register"
            >
              Sign up
            </Button>
            <Button sx={{ color: "bisque" }}>Logout</Button>
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
