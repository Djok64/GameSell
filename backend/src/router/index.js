const express = require("express");
const router = express.Router();

const gameRoutes = require("./gameRoutes");

const userRoutes = require("./userRoutes");

const clientRoutes = require("./clientRoutes");

const commandeRoutes = require("./commandeRoutes");

const authRoutes = require("./authRoutes");

router.get("/", (req, res) => {
  res.status(200).send("on est la dans /api sur index.js du dossier routeur");
});

router.use("/games", gameRoutes);
router.use("/users", userRoutes);
router.use("/clients", clientRoutes);
router.use("/commandes", commandeRoutes);
router.use("/auth", authRoutes);

module.exports = router;
