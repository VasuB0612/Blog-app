import React, { useState } from "react";
import Dropdown from "../Components/Dropdown";
import { useNavigate } from "react-router-dom";
import { useBlog } from "../Context/BlogProvider";
import { IoMenuSharp, IoClose, IoPersonCircleSharp } from "react-icons/io5";
import "../Styles/navStyles.css";
const Navbar = () => {
  const { user, setUser } = useBlog();
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(false);

  const handleLogout = () => {
    setUser(localStorage.removeItem("userInfo"));
    navigate("/login");
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

  return (
    <nav>
      {user && (
        <ul>
          <h1 style={{ fontFamily: "Source Code Pro, monospace" }}>
            <a href={user ? "/myBlogs" : "#"}>Slog</a>
          </h1>
          <li class="hideOnSmallScreens">
            <a href="/blogs">Blog</a>
          </li>
          <li class="hideOnSmallScreens">
            <a href="myBlogs">My blogs</a>
          </li>
          <li class="hideOnSmallScreens">
            <a href="/create">Create</a>
          </li>
          <li class="hideOnSmallScreens">
            <a href="#">
              <Dropdown />
            </a>
          </li>
          <li class="menu_button" onClick={showSideBar}>
            <a href="#">
              <IoMenuSharp />
            </a>
          </li>
        </ul>
      )}
      {!user && (
        <ul>
          <h1 style={{ fontFamily: "Source Code Pro, monospace" }}>
            <a href={user ? "/myBlogs" : "/"}>Slog</a>
          </h1>
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Sign up</a>
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
            <a href="/blogs">Blog</a>
          </li>
          <li>
            <a href="/myBlogs">My blogs</a>
          </li>
          <li>
            <a href="/create">Create</a>
          </li>
          <li>
            <a href="/profile">My stuff</a>
          </li>
          <li onClick={handleLogout}>
            <a href="#">Logout</a>
          </li>
        </ul>
      )}
      {!user && (
        <ul class="sidebar">
          <li>
            <a href="/login">Login</a>
          </li>
          <li>
            <a href="/register">Sign up</a>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
