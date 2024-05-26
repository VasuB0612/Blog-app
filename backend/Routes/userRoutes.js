const express = require("express");
const { getAllUsers, signup, login } = require("../Contollers/userController");

const app = express();

app.get("/allusers", getAllUsers);

app.post("/signup", signup);

app.post("/login", login);

module.exports = app;
