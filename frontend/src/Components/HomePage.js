import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

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
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "10%",
        "@media (max-width: 600px)": {
          marginTop: "20%",
        },
      }}
    >
      <h1 style={{ margin: "50px" }}>
        <span
          style={{
            fontWeight: "bold",
            color: "#1ac130",
            alignItems: "center",
          }}
        >
          {text}
        </span>
        <span style={{ color: "red" }}>
          <Cursor />
        </span>
      </h1>
    </div>
  );
};

export default HomePage;
