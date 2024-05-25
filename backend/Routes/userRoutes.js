const express = require("express");
const { getAllUsers } = require("../Contollers/userController");

const app = express();

app.get("/allusers", getAllUsers);

// app.post("/signup", )

module.exports = app;
