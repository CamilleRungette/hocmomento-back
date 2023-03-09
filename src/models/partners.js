const mongoose = require("mongoose");

const PartnerModel = mongoose.model("Partners", {
  name: String,
  link: String,
  photo: String,
});

module.exports = PartnerModel;
