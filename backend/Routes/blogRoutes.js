const express = require("express");
const {
  createBlog,
  fetchBlog,
  deleteBlog,
  updateBlog,
  userBlog,
} = require("../Contollers/blogController");

const app = express();

// Creation of a blog
app.post("/create", createBlog);

// Getting a specific blog
app.get("/fetch/:id", fetchBlog);

// Delete blog
app.delete("/delete/:id", deleteBlog);

// Update blog
app.put("/update/:id", updateBlog);

// Fetch a user's blogs
app.get("/userBlog/:id", userBlog);

module.exports = app;
