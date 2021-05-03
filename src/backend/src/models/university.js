const mongoose = require("mongoose"),
  { Schema } = mongoose;

const UniversitySchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("University", UniversitySchema);
