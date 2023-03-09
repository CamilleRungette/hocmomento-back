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

router.get("/message/:id", async (req, res) => {
  const messageId = req.params.id;

  try {
    const message = await Message.findById(messageId);
    if (!message) return res.status(400).send("Message not found");
    res.send(message);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/update-message/:id", async (req, res) => {
  const messageId = req.params.id;

  try {
    const message = await Message.findByIdAndUpdate(messageId, req.body, {
      new: true,
    });
    if (!message) return res.status(400).send("Message not found");

    res.send(message);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/delete-message/:id", async (req, res) => {
  const messageId = req.params.id;

  try {
    const message = await Message.findByIdAndDelete(messageId);
    if (!message) return res.status(400).send("Message not found");

    res.send(message);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
