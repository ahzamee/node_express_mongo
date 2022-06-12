const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
    },
    mobile: {
      type: String,
      minlength: 11,
    },
    password: {
      type: String,
    },
  },
  { collection: "user" }
);

const User = new mongoose.model("user", userSchema);

module.exports = User;
