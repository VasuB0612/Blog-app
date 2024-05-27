const mongoose = require("mongoose");
const Blog = require("../models/blogModel");
const User = require("../models/userModel");

// Controller for creating a blog
exports.createBlog = async (req, res) => {
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
};

// Controller for Fetching a blog
exports.fetchBlog = async (req, res) => {};

// Controller for deleting a blog
exports.deleteBlog = async (req, res) => {
  try {
    const { id } = req.params;
    const delBlog = await Blog.findByIdAndDelete(id);
    if (!delBlog) {
      return res.status(404).send("The blog does not exist.");
    }
    return res.status(200).send("The blog has been deleted successfully");
  } catch (error) {
    console.log(error);
  }
};

// Controller for updating a blog
exports.updateBlog = async (req, res) => {
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
};
