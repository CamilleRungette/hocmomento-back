const express = require("express");
const router = new express.Router();
const Action = require("../models/cultural_actions");
const Show = require("../models/show");
const Event = require("../models/event");
const Message = require("../models/message");

router.get("/", async function (req, res) {
  console.log("======> CONNECTION BACK-END SUCCESSFUL !");

  res.send("Connection au back-end réussie");
});

router.get("/count", async (req, res) => {
  try {
    const actions = await Action.find({});
    const shows = await Show.find({});
    const events = await Event.find({});
    const messages = await Message.find({});

    res.status(200).send({
      actions: actions.length,
      shows: shows.length,
      events: events.length,
      messages: messages.length,
    });
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
