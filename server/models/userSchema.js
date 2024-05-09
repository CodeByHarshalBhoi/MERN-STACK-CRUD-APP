const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  age: {
    type: String,
    required: true,
  },
  mobile: {
    type: Number,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  work: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

const User = new mongoose.model("users", userSchema);
module.exports = User;
