import React from "react";
// import "../index.css";
import "../styles/header.css";

const Header = () => {
  return (
    <section>
      <header className="container">
        <div className="logo">
          <img alt="Logo" />
        </div>
        <div className="unorderedList">
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/">Articles</a>
            </li>
            <li>
              <a href="/">Pages</a>
            </li>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">FAQ</a>
            </li>
          </ul>
          <button>Sign in</button>
        </div>
      </header>
    </section>
  );
};

export default Header;
