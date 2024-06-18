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
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncated = text.slice(0, maxLength);
      return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
    }
  };
  return (
    <div>
      <div className="card">
        <img src={image} alt="" />
        <div className="card_content">
          <h3>{title}</h3>
          <p>{truncateText(description, 100)}</p>
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
