import * as React from "react";
import "../Styles/card.css";
import { useBlog } from "../Context/BlogProvider";

export default function BlogCards({
  description,
  title,
  image,
  username,
  when,
}) {
  const { user, setUser } = useBlog();
  return (
    <div className="card_container">
      <div className="card">
        <img src={image} alt="" />
        <div className="card_content">
          <h3>{title}</h3>
          <p>{description}</p>
          <br />
          <p>{username}</p>
          <p>{when}</p>
          <a href="" className="btn">
            Read more
          </a>
        </div>
      </div>
    </div>
  );
}
