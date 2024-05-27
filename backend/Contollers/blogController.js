const Blog = require("../models/blogModel");

// Controller for creating a blog
exports.createBlog = async (req, res) => {
  try {
    const { title, description, image } = req.body;
    if (!title || !description || !image) {
      return res.status(400).send({
        message: "Please provide all the required fields",
      });
    }
    const config = {
      title,
      description,
      image,
    };
    const blog = await Blog.create(config);
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
