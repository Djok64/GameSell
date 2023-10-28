//FICHIER ROUTAGE POUR LES CLIENTS

const express = require("express");
const router = express.Router();

const { getAll, getOne } = require("../controller/clientController");

router.get("/", getAll);
router.get("/:id", getOne);

module.exports = router;
