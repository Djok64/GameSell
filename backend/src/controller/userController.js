const { findAll, findOne } = require("../model/usersModel.js");
const validateUser = require("../validator/userValidator");

const getAll = async (req, res) => {
  try {
    const users = await findAll();
    res.send(users);
  } catch (err) {
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const userId = parseInt(req.params.id, 10);
  try {
    if (isNaN(userId)) {
      throw new Error();
    }
    const [user] = await findOne(userId);
    res.send(user);
  } catch (err) {
    res.sendStatus(500);
  }
};

const createOne = async (req, res) => {
  try {
    // const { email, password, nom } = req.body;
    console.log(req.body);
    const errors = validateUser(req.body);
    if (errors) {
      return res.status(401).send(errors);
    }

    res.send("req.body a fonctionné informations recupérer");
  } catch (err) {
    res.sendStatus(500);
  }
};
module.exports = { getAll, getOne, createOne };
