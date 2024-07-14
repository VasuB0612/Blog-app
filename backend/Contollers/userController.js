const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const generateRandomToken = require("../Config/generateToken");
const nodemailer = require("nodemailer");
const jwt_secret = process.env.JWT_SECRET;

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

const resetPassword = asyncHandler(async (req, res) => {
  const { email } = req.body;
  try {
    const oldUser = await User.findOne({ email });
    if (!oldUser) {
      return res.status(400).json({ status: "User not found" });
    }
    const secret = jwt_secret + oldUser.password;
    const token = jwt.sign({ email: oldUser.email, id: oldUser._id }, secret, {
      expiresIn: "5m",
    });
    const link = `https://blog-backend-pfb0.onrender.com/api/users/forgot-password/${oldUser._id}/${token}`;
    var transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL,
        pass: process.env.PASSWORD,
      },
    });

    var mailOptions = {
      from: "youremail@gmail.com",
      to: "vasubhatnagar612@gmail.com",
      subject: "Password Reset",
      text: link,
    };

    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
      } else {
        console.log("Email sent: " + info.response);
      }
    });
    console.log(link);
  } catch (error) {
    console.log(error);
  }
});

const forgotPassword = asyncHandler(async (req, res) => {
  const { id, token } = req.params;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.status(400).json({ status: "User not found" });
  }
  const secret = jwt_secret + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    res.render("index", { email: verify.email });
  } catch (error) {
    res.status(400).json({ status: "Not verified" });
  }
});

const forgotPasswordPost = asyncHandler(async (req, res) => {
  const { id, token } = req.params;
  const { password } = req.body;
  console.log(req.params);
  const oldUser = await User.findOne({ _id: id });
  if (!oldUser) {
    return res.status(400).json({ status: "User not found" });
  }
  const secret = jwt_secret + oldUser.password;
  try {
    const verify = jwt.verify(token, secret);
    const hashedPassword = await bcrypt.hash(password, 10);
    const updatedUser = await User.updateOne(
      { _id: id },
      { $set: { password: hashedPassword } }
    );
    res.status(200).json({ status: "Password updated" });
    // res.render("index", { email: verify.email });
  } catch (error) {
    res.status(400).json({ status: "There was an error." });
  }
});

module.exports = {
  getAllUsers,
  login,
  signup,
  resetPassword,
  forgotPassword,
  forgotPasswordPost,
};
