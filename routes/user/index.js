const express = require("express");
const userAuth = require("../../controllers/user/userAuth.controller");
const router = express.Router();

router
  .route("/login")
  .post(userAuth.login)
  .get((req, res) => {
    res.send("Get Hello");
  })
  .patch((req, res) => {
    res.send("Patch Hello");
  });

module.exports = router;
