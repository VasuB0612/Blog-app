import * as React from "react";
import "../Styles/card.css";
import axios from "axios";
import { MdDelete, MdEdit } from "react-icons/md";
import { useNavigate } from "react-router-dom";

export default function BlogCards({
  description,
  title,
  image,
  username,
  when,
  isAdmin,
  blogId,
  removeBlog,
}) {
  const truncateText = (text, maxLength) => {
    if (text.length <= maxLength) {
      return text;
    } else {
      const truncated = text.slice(0, maxLength);
      return truncated.slice(0, truncated.lastIndexOf(" ")) + "...";
    }
  };

  const navigate = useNavigate();

  const handleEdit = () => {
    navigate(`/edit/${blogId}`);
  };

  const handleDelete = async () => {
    try {
      console.log(blogId);
      const response = await axios.delete(
        `https://blog-backend-pfb0.onrender.com/api/blogs/delete/${blogId}`
      );
      if (response.status === 200) {
        navigate("/myBlogs");
        removeBlog((blogs) => blogs.filter((blog) => blog._id !== blogId));
      } else {
        alert("Failed to delete the blog. Please try again.");
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <div className="card">
        <img src={image} alt="image" />
        <div className="card_content">
          <h3>{title}</h3>
          <p>{truncateText(description, 100)}</p>
          <br />
          <p>{username}</p>
          <p>{when}</p>
          <div>
            {isAdmin && (
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
