const mongoose = require("mongoose");

const Show = mongoose.model("Show", {
  dates: [String],
  description: String,
  gallery: [String],
  links: [String],
  title: String,
});

module.exports = Show;
