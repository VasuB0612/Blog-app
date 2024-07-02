const mongoose = require("mongoose");
const asyncHandler = require("express-async-handler");
const Blog = require("../models/blogModel");
const User = require("../models/userModel");

// Controller for creating a blog
const createBlog = asyncHandler(async (req, res) => {
  try {
    // user here is user ID
    const { title, description, image, user } = req.body;
    if (!title || !description || !image || !user) {
      return res.status(400).send({
        message: "Please provide all the required fields",
      });
    }
    const config = {
      title,
      description,
      image,
    };

    const existingUser = await User.findById(user);
    if (!existingUser) {
      return res.status(400).send("Unable to find user");
    }

    const newBlog = new Blog({
      title,
      description,
      image,
      user,
    });

    const session = await mongoose.startSession();
    session.startTransaction();
    await newBlog.save({ session });
    existingUser.blogs.push(newBlog);
    await existingUser.save({ session });
    await session.commitTransaction();
    await newBlog.save();

    return res.status(201).send({
      message: "Your blog was successfully created",
    });
  } catch (error) {
    console.log(error);
  }
});

// Fetching all the blogs
const fetchAllBlogs = asyncHandler(async (req, res) => {
  try {
    const blogs = await Blog.find().populate("user", "username");
    res.status(200).json(blogs);
  } catch (error) {
    res
      .status(500)
      .json({ message: "Failed to fetch blogs", error: error.message });
  }
});

// Controller for Fetching a random blog
const fetchBlog = asyncHandler(async (req, res) => {
  const existingBlog = await Blog.findById(req.params.id);
  if (!existingBlog) {
    return res.status(400).send("Unable to find blog");
  }
  return res.status(200).send(existingBlog);
});

// Controller for fetching a specific user's blogs by ID.
const userBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const userblog = await User.findById(id).populate({
      path: "blogs",
      populate: {
        path: "user",
        select: "username",
      },
    });
    if (!userblog) {
      return res.status(400).send("Unable to find user");
    }
    return res.status(200).send(userblog.blogs);
  } catch (error) {
    console.error(error);
    return res.status(500).send("Server error");
  }
});

// Controller for deleting a blog
const deleteBlog = asyncHandler(async (req, res) => {
  try {
    const { id } = req.params;
    const delBlog = await Blog.findByIdAndDelete(id).populate(
      "user",
      "-password"
    );
    console.log(delBlog);
    if (delBlog.user) {
      delBlog.user.blogs.pull(delBlog);
      await delBlog.user.save();
    }
    return res.status(200).send(delBlog);
  } catch (error) {
    console.log(error);
  }
});

// Controller for updating a blog
const updateBlog = asyncHandler(async (req, res) => {
  try {
    const { title, description, image } = req.body;
    const { id } = req.params;

    const blogupdate = await Blog.findByIdAndUpdate(
      id,
      { title, description, image },
      { new: true }
    );
    return res.status(200).send({
      message: "Blog has been updated",
    });
  } catch (error) {
    console.log(error);
  }
});

module.exports = {
  createBlog,
  fetchAllBlogs,
  fetchBlog,
  userBlog,
  deleteBlog,
  updateBlog,
};
