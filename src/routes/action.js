const express = require("express");
const Action = require("../models/cultural_actions");
const router = new express.Router();

router.post("/create-action", async (req, res) => {
  const action = new Action(req.body);
  console.log(req.body);

  try {
    const saveAction = await action.save();
    res.status(201).send(saveAction);
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.get("/actions", async (req, res) => {
  try {
    const actions = await Action.find({});
    res.send(actions);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.get("/action/:id", async (req, res) => {
  const actionId = req.params.id;

  try {
    const action = await Action.findById(actionId);
    if (!action) return res.status(400).send("Action not found");
    res.send(action);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.patch("/update-action/:id", async (req, res) => {
  const actionId = req.params.id;

  try {
    const action = await Action.findByIdAndUpdate(actionId, req.body, {
      new: true,
    });
    if (!action) return res.status(400).send("Action not found");

    res.send(action);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/delete-action/:id", async (req, res) => {
  const actionId = req.params.id;

  try {
    const action = await Action.findByIdAndDelete(actionId);
    if (!action) return res.status(400).send("Action not found");

    res.send(action);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
