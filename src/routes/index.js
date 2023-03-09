const express = require("express");
const router = new express.Router();

router.get("/", async function (req, res) {
  console.log("======> CONNECTION BACK-END SUCCESSFUL !");

  res.send("Connection au back-end réussie");
});

module.exports = router;
