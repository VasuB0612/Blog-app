const User = require("../models/userModel");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const generateRandomToken = require("../Config/generateToken");

// Get all users
const getAllUsers = asyncHandler(async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({
      users: users.map((u) => u.username),
    });
  } catch (error) {}
});

// Register users
const signup = asyncHandler(async (req, res) => {
  try {
    const { username, email, password } = req.body;
    if (!username || !email || !password) {
      return res.status(400).send("Please fill all the fields");
    }
    const existingUser = await User.findOne({ email: email });
    if (existingUser) {
      return res.status(400).send("The user already exists");
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      username: username,
      email: email,
      password: hashedPassword,
    });
    res.status(201).send("User created successfully");
  } catch (error) {
    console.log(error);
  }
});

// Login users
const login = asyncHandler(async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).send("Please provide email and password");
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).send("Invalid email or password");
    }

    const isSamePassword = await bcrypt.compare(password, user.password);
    if (!isSamePassword) {
      return res.status(401).send("Invalid email or password");
    }

    const token = generateRandomToken(user._id);
    const object = {
      id: user._id,
      name: user.username,
      email: user.email,
      token: token,
    };
    return res.status(200).json(object);
  } catch (error) {
    console.log(error);
  }
});

module.exports = { getAllUsers, login, signup };
