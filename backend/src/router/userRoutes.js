const express = require("express");
const router = express.Router();

const { getAll, getOne, createOne } = require("../controller/userController");

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/", createOne);

module.exports = router;
