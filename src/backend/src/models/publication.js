const mongoose = require("mongoose"),
  { Schema } = mongoose;

const PublicationSchema = new Schema({
  publisher: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  interests: {
    type: String,
  }
});

module.exports = mongoose.model("Publication", PublicationSchema);
