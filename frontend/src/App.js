import "./App.css";
import Navbar from "./Components/Navbar";
import Signup from "./Pages/Signup";
import Blogs from "./Pages/Blogs";
import Login from "./Pages/Login";
import { Routes, Route } from "react-router-dom";
function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Blogs />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Signup />} />
      </Routes>
    </>
  );
}

export default App;
