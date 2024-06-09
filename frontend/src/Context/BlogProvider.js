import { createContext, useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BlogContext = createContext();

const BlogProvider = ({ children }) => {
  const [user, setUser] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("userInfo"));
    setUser(userInfo);
    console.log(userInfo);
  }, [navigate]);

  return (
    <BlogContext.Provider value={{ user, setUser }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useBlog = () => {
  return useContext(BlogContext);
};

export default BlogProvider;
