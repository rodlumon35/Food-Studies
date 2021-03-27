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
  },
  following: {
    type: [String],
  },
  followingHashtags: {
    type: [String],
  }
});

module.exports = mongoose.model("User", UserSchema);
