import React from "react";
import {
  Box,
  AppBar,
  Toolbar,
  Button,
  Typography,
  Tabs,
  Tab,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../Context/BlogProvider";
const Navbar = () => {
  //  Global state
  const { user, setUser } = useBlog();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(localStorage.removeItem("userInfo"));
    navigate("/login");
  };

  // local state
  const [value, setValue] = useState();
  return (
    <>
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "hotpink",
        }}
      >
        <Toolbar>
          <Typography
            variant="h4"
            sx={{
              color: "#745E96",
              fontFamily: "'Pixelify Sans', sans-serif",
              textTransform: "none",
            }}
          >
            Slog
          </Typography>
          <Box display={"flex"} marginLeft="auto">
            {user && (
              <>
                <Button
                  label="Blogs"
                  sx={{
                    color: "#745E96",
                    fontFamily: "'Pixelify Sans', sans-serif",
                    marginRight: 4,
                    textTransform: "none",
                    fontSize: "17px",
                  }}
                  LinkComponent={Link}
                  to="/blogs"
                >
                  Blogs
                </Button>
                <Button
                  label="My Blogs"
                  sx={{
                    color: "#745E96",
                    fontFamily: "'Pixelify Sans', sans-serif",
                    marginRight: 4,
                    textTransform: "none",
                    fontSize: "17px",
                  }}
                  LinkComponent={Link}
                  to="/myBlogs"
                >
                  My Blogs
                </Button>

                <Button
                  label="My Blogs"
                  sx={{
                    color: "#745E96",
                    fontFamily: "'Pixelify Sans', sans-serif",
                    marginRight: 4,
                    textTransform: "none",
                    fontSize: "17px",
                  }}
                  LinkComponent={Link}
                  to="/create"
                >
                  Create Blog
                </Button>
              </>
            )}
            {!user ? (
              <>
                <Button
                  sx={{
                    color: "#745E96",
                    fontFamily: "'Pixelify Sans', sans-serif",
                    marginRight: 4,
                    textTransform: "none",
                    fontSize: "17px",
                  }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{
                    color: "#745E96",
                    fontFamily: "'Pixelify Sans', sans-serif",
                    marginRight: 4,
                    textTransform: "none",
                    fontSize: "17px",
                  }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Sign up
                </Button>
              </>
            ) : (
              <Button
                sx={{
                  color: "#745E96",
                  fontFamily: "'Pixelify Sans', sans-serif",
                  textTransform: "none",
                  fontSize: "17px",
                }}
                onClick={handleLogout}
              >
                Logout
              </Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
