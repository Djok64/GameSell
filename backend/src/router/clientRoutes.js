//FICHIER ROUTAGE POUR LES CLIENTS

const express = require("express");
const router = express.Router();

const { getAll, getOne } = require("../controller/clientController");

const validateId = require("../middleware/idValidator");

router.get("/", getAll);
router.get("/:id", validateId, getOne);

module.exports = router;
