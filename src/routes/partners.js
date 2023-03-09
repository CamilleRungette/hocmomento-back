const express = require("express");
const Message = require("../models/message");
const router = new express.Router();

router.post("/create-message", async (req, res) => {
  const message = new Message(req.body);

  try {
    const saveMessage = await message.save();
    res.status(201).send(saveMessage);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.get("/messages", async (req, res) => {
  try {
    const messages = await Message.find({});
    res.send(messages);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
