const express = require("express"),
  router = express.Router(),
  Publication = require("../models/publication");

router.get("/", async (req, res) => {
  const publications = await Publication.find();
  console.log('works');
  res.json(publications);
});

router.post("/publish", async (req, res) => {
  const publication = new Publication(req.body);
  if (publication.content && publication.publisher) {
    await publication.save();
    res.json({
      status: "OK",
      message: "published",
      data: publication,
    });
  } else {
    res.json({ status: "ERROR", message: "Missing data" });
  }
});

module.exports = router;
