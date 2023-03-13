require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");

const mongoUrl =
  // app.get("env") === "production"
  //   ? process.env.MONGO_URL
  //   :
  process.env.MONGO_URL_DEV;

async function connectDb() {
  await mongoose.connect(mongoUrl);
  console.log("Db connectée");
}

module.exports = { connectDb };
