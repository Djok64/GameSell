const { findAll, findOne } = require("../model/clientsModel.js");

const getAll = async (req, res) => {
  try {
    const clients = await findAll();
    res.send(clients);
  } catch (err) {
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  const clientId = parseInt(req.params.id, 10);
  try {
    const [client] = await findOne(clientId);
    if (!client) {
      // Si le client n'est pas trouvé, renvoyez un statut 404 avec un message
      return res.status(404).send({ error: "Client not found" });
    }
    res.send(client);
  } catch (err) {
    // Gestion des erreurs du serveur
    res.status(500).send({ error: "Server error", details: err.message });
  }
};
module.exports = { getAll, getOne };
