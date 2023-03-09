const mongoose = require("mongoose");

const eventModel = mongoose.model("Event", {
  dates: [Object],
  description: String,
  photo: String,
  title: String,
  type: String,
});

module.exports = eventModel;
