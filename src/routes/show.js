const express = require("express");
const Show = require("../models/show");
const router = new express.Router();

router.post("/create-show", async (req, res) => {
  const show = new Show(req.body);

  try {
    const saveShow = await show.save();
    res.status(201).send(saveShow);
  } catch (e) {
    res.status(400).send(e);
  }
});

router.get("/shows", async (req, res) => {
  try {
    const shows = await Show.find({});
    res.send(shows);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/show/:id", async (req, res) => {
  const showId = req.params.id;

  try {
    const show = await Show.findById(showId);
    if (!show) return res.status(400).send("Show not found");
    res.send(show);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/update-show/:id", async (req, res) => {
  const showId = req.params.id;

  try {
    const show = await Show.findByIdAndUpdate(showId, req.body, {
      new: true,
    });
    if (!show) return res.status(400).send("Show not found");

    res.send(show);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/delete-show/:id", async (req, res) => {
  const showId = req.params.id;

  try {
    const show = await Show.findByIdAndDelete(showId);
    if (!show) return res.status(400).send("Show not found");

    res.send(show);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
