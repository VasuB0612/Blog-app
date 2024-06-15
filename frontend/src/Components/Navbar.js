import React from "react";
import {
  Box,
  AppBar,
  Avatar,
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
import { IoMenuSharp } from "react-icons/io5";
import { IoClose } from "react-icons/io5";
import "../Styles/navStyles.css";
const Navbar = () => {
  //  Global state
  const { user, setUser } = useBlog();
  const navigate = useNavigate();

  const handleLogout = () => {
    setUser(localStorage.removeItem("userInfo"));
    navigate("/login");
  };

  const navLinksStyle = {
    display: "flex",
    gap: "15px",
    flexWrap: "wrap",
  };

  const showSideBar = (e) => {
    e.preventDefault();
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "flex";
  };

  const hideSideBar = (e) => {
    e.preventDefault();
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = "none";
  };

  // local state
  const [value, setValue] = useState();
  return (
    <nav>
      {user && (
        <ul>
          <li>
            <a href="#">Slog</a>
          </li>
          <li class="hideOnSmallScreens">
            <a href="#">Blog</a>
          </li>
          <li class="hideOnSmallScreens">
            <a href="#">My blogs</a>
          </li>
          <li class="hideOnSmallScreens">
            <a href="#">Create</a>
          </li>
          <li class="hideOnSmallScreens" onClick={handleLogout}>
            <a href="#">Logout</a>
          </li>
          <li class="menu_button" onClick={showSideBar}>
            <a href="">
              <IoMenuSharp />
            </a>
          </li>
        </ul>
      )}
      {!user && (
        <ul>
          <li>
            <a href="#">Slog</a>
          </li>
          <li>
            <a href="#">login</a>
          </li>
          <li>
            <a href="#">sign up</a>
          </li>
        </ul>
      )}

      {user && (
        <ul class="sidebar">
          <li onClick={hideSideBar}>
            <a href="">
              <IoClose />
            </a>
          </li>
          <li>
            <a href="#">Blog</a>
          </li>
          <li>
            <a href="#">My blogs</a>
          </li>
          <li>
            <a href="#">Create</a>
          </li>
          <li onClick={handleLogout}>
            <a href="#">Logout</a>
          </li>
        </ul>
      )}
      {!user && (
        <ul class="sidebar">
          <li>
            <a href="#">login</a>
          </li>
          <li>
            <a href="#">sign up</a>
          </li>
        </ul>
      )}
    </nav>
    // <>
    //   <AppBar
    //     position="sticky"
    //     sx={{
    //       backgroundColor: "hotpink",
    //     }}
    //     width="100%"
    //   >
    //     <Toolbar>
    //       <Avatar
    //         src="https://cdn5.vectorstock.com/i/1000x1000/89/29/heart-pixel-pink-icon-isolated-on-black-vector-34538929.jpg"
    //         alt="Logo"
    //         sx={{ width: 32, height: 32, marginRight: 1, marginBottom: 0.5 }}
    //       />
    //       <Typography
    //         variant="h4"
    //         sx={{
    //           color: "#745E96",
    //           fontFamily: "'Pixelify Sans', sans-serif",
    //           textTransform: "none",
    //         }}
    //       >
    //         WeBlog
    //       </Typography>
    //       <Box display={"flex"} marginLeft="auto">
    //         {user && (
    //           <>
    //             <Button
    //               label="Blogs"
    //               sx={{
    //                 color: "#745E96",
    //                 fontFamily: "'Pixelify Sans', sans-serif",
    //                 marginRight: 2,
    //                 textTransform: "none",
    //                 fontSize: "17px",
    //               }}
    //               LinkComponent={Link}
    //               to="/blogs"
    //             >
    //               Blogs
    //             </Button>
    //             <Button
    //               label="My Blogs"
    //               sx={{
    //                 color: "#745E96",
    //                 fontFamily: "'Pixelify Sans', sans-serif",
    //                 marginRight: 2,
    //                 textTransform: "none",
    //                 fontSize: "17px",
    //               }}
    //               LinkComponent={Link}
    //               to="/myBlogs"
    //             >
    //               My Blogs
    //             </Button>

    //             <Button
    //               label="My Blogs"
    //               sx={{
    //                 color: "#745E96",
    //                 fontFamily: "'Pixelify Sans', sans-serif",
    //                 marginRight: 2,
    //                 textTransform: "none",
    //                 fontSize: "17px",
    //               }}
    //               LinkComponent={Link}
    //               to="/create"
    //             >
    //               Create Blog
    //             </Button>
    //           </>
    //         )}
    //         {!user ? (
    //           <>
    //             <Button
    //               sx={{
    //                 color: "#745E96",
    //                 fontFamily: "'Pixelify Sans', sans-serif",
    //                 marginRight: 2,
    //                 textTransform: "none",
    //                 fontSize: "17px",
    //               }}
    //               LinkComponent={Link}
    //               to="/login"
    //             >
    //               Login
    //             </Button>
    //             <Button
    //               sx={{
    //                 color: "#745E96",
    //                 fontFamily: "'Pixelify Sans', sans-serif",
    //                 marginRight: 4,
    //                 textTransform: "none",
    //                 fontSize: "17px",
    //               }}
    //               LinkComponent={Link}
    //               to="/register"
    //             >
    //               Sign up
    //             </Button>
    //           </>
    //         ) : (
    //           <Button
    //             sx={{
    //               color: "#745E96",
    //               fontFamily: "'Pixelify Sans', sans-serif",
    //               textTransform: "none",
    //               fontSize: "17px",
    //             }}
    //             onClick={handleLogout}
    //           >
    //             Logout
    //           </Button>
    //         )}
    //       </Box>
    //     </Toolbar>
    //   </AppBar>
    // </>
  );
};

export default Navbar;
