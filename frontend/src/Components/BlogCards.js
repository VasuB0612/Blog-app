import * as React from "react";
import "../Styles/card.css";
import { useBlog } from "../Context/BlogProvider";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function BlogCards({
  description,
  title,
  image,
  username,
  when,
  blogId,
  isUser,
}) {
  const { user, setUser } = useBlog();
  const navigate = useNavigate();
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncated = text.slice(0, maxLength);
      return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
    }
  };

  const handleEdit = () => {
    navigate(`/edit/${blogId}`);
  };

  const handleDelete = () => {};

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
          <div className="deletionEdit">
            <button className="btn">Read more</button>
            {isUser && (
              <div className="icons">
                <MdEdit onClick={handleEdit} className="icon1" />
                <MdDelete onClick={handleDelete} className="icon2" />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
