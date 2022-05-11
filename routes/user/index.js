const express = require("express");
const router = express.Router();

router
  .route("/us")
  .get((req, res) => {
    res.send("Get Hello");
  })
  .patch((req, res) => {
    res.send("Patch Hello");
  });

module.exports = router;
