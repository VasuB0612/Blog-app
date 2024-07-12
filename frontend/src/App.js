import Navbar from "./Components/Navbar";
import HomePage from "./Components/HomePage";
import Profile from "./Components/Profile";
import ForgotPassword from "./Components/ForgotPassword";
import Signup from "./Pages/Signup";
import Blogs from "./Pages/Blogs";
import UserBlogs from "./Pages/UserBlogs";
import Login from "./Pages/Login";
import CreateBlog from "./Pages/CreateBlog";
import EditBlog from "./Pages/EditBlog";
import "../src/Styles/textarea.css";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myBlogs" element={<UserBlogs />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
        <Route path="/reset-password" element={<ForgotPassword />} />
      </Routes>
    </>
  );
}

export default App;
