import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import "../Styles/Home.css";

const HomePage = () => {
  const [text] = useTypewriter({
    words: [
      "Welcome to my Blog App!",
      "Discover New Stories Here.",
      "Find Inspiration in Every Blog.",
    ],
    loop: true,
    typeSpeed: 60,
    deleteSpeed: 50,
  });
  return (
    <div className="container">
      <h1 className="heading">
        <span className="text">{text}</span>
        <span className="cursor">
          <Cursor />
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
