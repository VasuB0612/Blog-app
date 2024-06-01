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
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
const Navbar = () => {
  //  Global state
  const isLogin = useSelector((state) => state.isLogin);
  console.log(isLogin);
  // local state
  const [value, setValue] = useState();
  return (
    <>
      <AppBar position="sticky" sx={{ backgroundColor: "#006400" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ color: "#FFE4C4" }}>
            Slog
          </Typography>
          {isLogin && (
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
            {!isLogin ? (
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
              <Button sx={{ color: "#FFE4C4" }}>Logout</Button>
            )}
          </Box>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default Navbar;
