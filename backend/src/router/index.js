const express = require("express");
const router = express.Router();

const gameRoutes = require("./gameRoutes");

const userRoutes = require("./userRoutes");

const clientRoutes = require("./clientRoutes");

const commandeRoutes = require("./commandeRoutes");

const authRoutes = require("./authRoutes");

const authorization = require("../middleware/auth");

router.get("/", (req, res) => {
  res.status(200).send("on est la dans /api sur index.js du dossier routeur");
});

router.use("/games", gameRoutes);
router.use("/users", authorization, userRoutes);
router.use("/clients", authorization, clientRoutes);
router.use("/commandes", authorization, commandeRoutes);
router.use("/auth", authRoutes);

module.exports = router;
