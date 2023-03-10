const express = require("express");
const Admin = require("../models/admin");
const router = new express.Router();

router.post("/create-admin", async (req, res) => {
  console.log("Create admin");
  const admin = new Admin(req.body);

  try {
    const authToken = await admin.generateAuthTokenAndSaveUser();
    res.status(201).send({ admin, authToken });
  } catch (e) {
    console.log(e);
    res.status(400).send(e);
  }
});

router.post("/admin-login", async (req, res) => {
  console.log("Admin-login");

  try {
    const admin = await Admin.findUser(req.body.email, req.body.password);
    res.send({ success: true, admin });
  } catch (e) {
    res.status(400).send({ sucess: false, error: e });
  }
});

router.get("/admin", async (req, res) => {
  console.log("Get admins");

  try {
    const admin = await Admin.find({});
    res.send(admin);
  } catch (e) {
    res.status(500).send(e);
  }
});

router.delete("/delete-admin/:id", async (req, res) => {
  console.log("Delete admin");

  const adminId = req.params.id;

  try {
    const admin = await Action.findByIdAndDelete(adminId);
    if (!admin) return res.status(400).send("Action not found");

    res.send(admin);
  } catch (e) {
    res.status(500).send(e);
  }
});

module.exports = router;
