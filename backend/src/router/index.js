const express = require("express");
const router = express.Router();

const gameRoutes = require("./gameRoutes");

const userRoutes = require("./userRoutes");

const clientRoutes = require("./clientRoutes");

const commandeRoutes = require("./commandeRoutes");

router.get("/", (req, res) => {
  res.status(200).send("on est la dans /api sur index.js du dossier routeur");
});

router.use("/games", gameRoutes);
router.use("/users", userRoutes);
router.use("/clients", clientRoutes);
router.use("/commandes", commandeRoutes);

module.exports = router;
