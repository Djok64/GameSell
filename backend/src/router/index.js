const express = require("express");
const router = express.Router();

const gameRoutes = require("./gameRoutes");

router.get("/", (req, res) => {
  res.status(200).send("on est la dans /api sur index.js du dossier routeur");
});

router.use("/games", gameRoutes);

module.exports = router;
