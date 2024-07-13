const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");
dotenv.config();

const app = express();

const port = process.env.PORT;
const db = process.env.MONGO_URI;

const userRoutes = require("./Routes/userRoutes");
const blogRoutes = require("./Routes/blogRoutes");

// middlewares
app.use(cors());
app.use(express.json());
app.set("view engine", "ejs");

// route
app.use("/api/users", userRoutes);
app.use("/api/blogs", blogRoutes);

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
