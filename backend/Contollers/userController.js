const User = require("../models/userModel");
const bcrypt = require("bcrypt");

// Get all users
exports.getAllUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).send({
      users: users.map((u) => u.username),
    });
  } catch (error) {}
};

// Register users
exports.signup = async (req, res) => {
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
};

// Login users
exports.login = async (req, res) => {};
