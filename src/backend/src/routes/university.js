const express = require("express"),
  router = express.Router(),
  University = require("../models/university");

router.get("/", async (req, res) => {
  const _universities = await University.find();
  res.json(_universities);
});

module.exports = router;
