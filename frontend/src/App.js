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
        <Route
          path="https://blog-frontend-5sat.onrender.com/blogs"
          element={<Blogs />}
        />
        <Route
          path="https://blog-frontend-5sat.onrender.com/myBlogs"
          element={<UserBlogs />}
        />
        <Route
          path="https://blog-frontend-5sat.onrender.com/edit/:id"
          element={<EditBlog />}
        />
        <Route
          path="https://blog-frontend-5sat.onrender.com/create"
          element={<CreateBlog />}
        />
        <Route
          path="https://blog-frontend-5sat.onrender.com/login"
          element={<Login />}
        />
        <Route
          path="https://blog-frontend-5sat.onrender.com/register"
          element={<Signup />}
        />
      </Routes>
    </>
  );
}

export default App;
