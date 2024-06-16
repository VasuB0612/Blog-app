const express = require("express");
const {
  createBlog,
  fetchAllBlogs,
  fetchBlog,
  deleteBlog,
  updateBlog,
  userBlog,
} = require("../Contollers/blogController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

// Creation of a blog
router.route("/create").post(createBlog);

// Fetching all blogs
router.route("/all-blogs").get(fetchAllBlogs);

// Getting a specific blog
router.route("/fetch/:id").get(fetchBlog);

// Delete blog
router.route("/delete/:id").delete(deleteBlog);

// Update blog
router.route("/update/:id").put(updateBlog);

// Fetch a user's blogs
router.route("/userBlog/:id").get(userBlog);

module.exports = router;
