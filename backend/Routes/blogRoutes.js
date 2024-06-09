const express = require("express");
const {
  createBlog,
  fetchBlog,
  deleteBlog,
  updateBlog,
  userBlog,
} = require("../Contollers/blogController");
const protect = require("../middlewares/authMiddleware");

const router = express.Router();

// Creation of a blog
router.route(protect, "/create").post(createBlog);

// Getting a specific blog
router.route("/fetch/:id").get(fetchBlog);

// Delete blog
router.route(protect, "/delete/:id").delete(deleteBlog);

// Update blog
router.route("/update/:id").put(updateBlog);

// Fetch a user's blogs
router.route(protect, "/userBlog/:id").get(userBlog);

module.exports = router;
