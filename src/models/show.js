const mongoose = require("mongoose");

const Show = mongoose.model("Show", {
  dates: [String],
  description: String,
  gallery: [String],
  links: [Object],
  title: String,
  createdAt: Date,
});

module.exports = Show;
