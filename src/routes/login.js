const express = require("express");
const router = express.Router();

router
  .route("/login")
  .post((req, res) => {
    res.send("Login route");
  });

module.exports = router;