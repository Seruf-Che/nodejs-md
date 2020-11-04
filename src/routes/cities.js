const express = require("express");
const router = express.Router();

router
  .route("/cities")
  .get((req, res) => {
    const query = req.query.query;
    res.send(`City query: ${query}`);
  })
  .post((req, res) => {
    res.send("City added");
  });

router
  .route("/cities/:id")
  .get((req, res) => {
    const id = req.params.id;
    res.send(`City id ${id}`);
  })
  .put((req, res) => {
    const id = req.params.id;
    res.send(`City ${id} updated`);
  })
  .delete((req, res) => {
    const id = req.params.id;
    res.send(`City ${id} deleted`);
  });

module.exports = router;