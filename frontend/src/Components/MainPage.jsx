import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const MainPage = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainPage;
