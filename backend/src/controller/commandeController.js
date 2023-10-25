const { findAll, findOne } = require("../model/commandesModel.js");

const getAll = async (req, res) => {
  try {
    const commandes = await findAll();
    res.send(commandes);
  } catch (err) {
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const commandeId = parseInt(req.params.id, 10);
  try {
    if (isNaN(commandeId)) {
      throw new Error();
    }
    const [commande] = await findOne(commandeId);
    res.send(commande);
  } catch (err) {
    res.sendStatus(500);
  }
};
module.exports = { getAll, getOne };
