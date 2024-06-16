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
    <div className="card">
      <img src={image} alt="" className="image-card-img" />
      <div className="image-card-overlay">
        <div style={{ padding: "10px" }}>
          <h3 style={{ color: "beige", fontSize: "15px" }}>{title}</h3>
          <br />
          <p style={{ color: "beige", fontSize: "12px" }}>{description}</p>
          <br />
          <p style={{ color: "beige", fontSize: "10px" }}>{username}</p>
          <p style={{ color: "beige", fontSize: "10px" }}>{when}</p>
        </div>
      </div>
    </div>
  );
}
