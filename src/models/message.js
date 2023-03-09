const mongoose = require("mongoose");

const MessageModel = mongoose.model("Message", {
  content: String,
  date: Date,
  email: String,
  name: String,
  read: Boolean,
});
module.exports = MessageModel;
