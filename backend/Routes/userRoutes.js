const express = require("express");
const {
  getAllUsers,
  signup,
  login,
  resetPassword,
  forgotPassword,
} = require("../Contollers/userController");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

router.route("/").get(getAllUsers);

router.route("/register").post(signup);

router.route("/login").post(login);

router.route("/reset-password").post(resetPassword);

router.route("/forgot-password/:id/:token").get(forgotPassword);

module.exports = router;
