const express = require("express");
const router = express.Router();

router
  .route("/registration")
  .post((req, res) => {
    res.send("Registration route");
  });

module.exports = router;