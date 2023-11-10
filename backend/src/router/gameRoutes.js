//FICHIER ROUTAGES POUR LES ARTICLES(JEUX ETC)

const express = require("express");
const router = express.Router();

const { getAll, getOne } = require("../controller/gameController");

const validateId = require("../middleware/idValidator");

router.get("/", getAll);
router.get("/:id", validateId, getOne);

module.exports = router;
