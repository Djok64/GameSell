//FICHIER ROUTAGE POUR LES COMMANDES

const express = require("express");
const router = express.Router();

const { getAll, getOne } = require("../controller/commandeController");

const validateId = require("../middleware/idValidator");

router.get("/", getAll);
router.get("/:id", validateId, getOne);

module.exports = router;
