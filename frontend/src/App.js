import "../src/Styles/textarea.css";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Blogs from "./Pages/Blogs";
import UserBlogs from "./Pages/UserBlogs";
import Login from "./Pages/Login";
import CreateBlog from "./Pages/CreateBlog";
import { Routes, Route } from "react-router-dom";
import EditBlog from "./Pages/EditBlog";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/myBlogs" element={<UserBlogs />} />
        <Route path="/edit/:id" element={<EditBlog />} />
        <Route path="/create" element={<CreateBlog />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
