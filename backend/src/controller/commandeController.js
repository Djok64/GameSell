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
    const [commande] = await findOne(commandeId);
    if (!commande) {
      // Si la commande n'est pas trouvé, renvoyez un statut 404 avec un message
      return res.status(404).send({ error: "Commande not found" });
    }
    res.send(game);
  } catch (err) {
    // Gestion des erreurs du serveur
    res.status(500).send({ error: "Server error", details: err.message });
  }
};
module.exports = { getAll, getOne };
