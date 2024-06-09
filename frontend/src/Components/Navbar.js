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
    console.log(user);
  };

  // local state
  const [value, setValue] = useState();
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#006400" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ color: "#FFE4C4" }}>
            Slog
          </Typography>
          {user && (
            <Box display="flex" marginLeft="auto" marginRight="auto">
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab
                  label="Blogs"
                  sx={{ color: "#FFE4C4" }}
                  LinkComponent={Link}
                  to="/blogs"
                ></Tab>
                <Tab
                  label="My Blogs"
                  sx={{ color: "#FFE4C4" }}
                  LinkComponent={Link}
                  to="/myBlogs"
                ></Tab>
              </Tabs>
            </Box>
          )}
          <Box display={"flex"} marginLeft="auto">
            {!user ? (
              <>
                <Button
                  sx={{ color: "#FFE4C4" }}
                  LinkComponent={Link}
                  to="/login"
                >
                  Login
                </Button>
                <Button
                  sx={{ color: "#FFE4C4" }}
                  LinkComponent={Link}
                  to="/register"
                >
                  Sign up
                </Button>
              </>
            ) : (
              <Button sx={{ color: "#FFE4C4" }} onClick={handleLogout}>
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
