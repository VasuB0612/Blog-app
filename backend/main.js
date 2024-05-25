const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const port = process.env.PORT;
const db = process.env.MONGO_URI;

// middlewares
app.use(cors());
app.use(express.json());

// Dummy route
app.get("/", (req, res) => {
  res.send("You found us");
});

// Connecting to the database
try {
  mongoose.connect(db);
  console.log("Connected to the database.");
} catch (error) {
  console.error(error);
}

// Listening on
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
