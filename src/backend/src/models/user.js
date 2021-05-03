const mongoose = require("mongoose"),
  { Schema } = mongoose;

const UserSchema = new Schema({
  fullName: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  followers: {
    type: [String],
    required: true,
  },
  following: {
    type: [String],
    required: true,
  },
  followingHashtags: {
    type: [String],
    required: true,
  },
});

module.exports = mongoose.model("User", UserSchema);
