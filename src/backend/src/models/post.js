const mongoose = require("mongoose"),
  { Schema } = mongoose;

const PostSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  author: {
    id: {
      type: String,
      required: true,
    },
    createdAt: { type: Date, default: Date.now, required: true },
  },
  comments: {
    username: {
      type: String,
    },
    text: {
      type: String,
    },
  },
});

module.exports = mongoose.model("Post", PostSchema);
