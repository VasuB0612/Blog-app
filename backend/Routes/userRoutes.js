const express = require("express");
const { getAllUsers, signup, login } = require("../Contollers/userController");
const router = express.Router();
const protect = require("../middlewares/authMiddleware");

router.route("/").get(getAllUsers);

router.route("/register").post(signup);

router.route("/login").post(login);

module.exports = router;
