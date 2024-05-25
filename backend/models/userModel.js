const mongoose = require("mongoose");
const userSchema = new mongoose.Schema(
  {
    username: {
      Type: String,
      required: true,
    },
    email: {
      Type: String,
      required: true,
    },
    password: {
      Type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const userModel = mongoose.model("User", "userSchema");
module.exports = userModel;
