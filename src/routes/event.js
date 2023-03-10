const express = require("express");
const Event = require("../models/event");
const router = new express.Router();

router.post("/create-event", async (req, res) => {
  console.log("Create event");
  const event = new Event(req.body);

  try {
    const saveEvent = await event.save();
    res.status(201).send(saveEvent);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/events", async (req, res) => {
  console.log("Get events");

  try {
    const events = await Event.find({});
    res.send(events);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/event/:id", async (req, res) => {
  console.log("Get one event");

  const eventId = req.params.id;

  try {
    const event = await Event.findById(eventId);
    if (!event) return res.status(400).send("Event not found");
    res.send(event);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/update-event/:id", async (req, res) => {
  console.log("Update event");

  const eventId = req.params.id;

  try {
    const event = await Event.findByIdAndUpdate(eventId, req.body, {
      new: true,
    });
    if (!event) return res.status(400).send("Event not found");

    res.send(event);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/delete-event/:id", async (req, res) => {
  console.log("Delete event");

  const eventId = req.params.id;

  try {
    const event = await Event.findByIdAndDelete(eventId);
    if (!event) return res.status(400).send("Event not found");

    res.send(event);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
