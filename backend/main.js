const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("You found us");
});

app.listen(8000, () => {
  console.log("Server is running on port 8000");
});
