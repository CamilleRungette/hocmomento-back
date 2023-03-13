const mongoose = require("mongoose");

const ActionModel = mongoose.model("Action", {
  city: String,
  date: String,
  description: String,
  gallery: [String],
  links: [Object],
  place: String,
  title: String,
  createdAt: Date,
});

module.exports = ActionModel;
