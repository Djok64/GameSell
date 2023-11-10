const { findAll, findOne } = require("../model/gamesModel.js");

const getAll = async (req, res) => {
  try {
    const games = await findAll();
    res.send(games);
  } catch (err) {
    res.sendStatus(500);
  }
};

const getOne = async (req, res) => {
  // Convertir l'ID de chaîne en nombre
  const gameId = parseInt(req.params.id, 10);

  try {
    const game = await findOne(gameId);
    if (!game) {
      // Si le jeu n'est pas trouvé, renvoyez un statut 404 avec un message
      return res.status(404).send({ error: "Game not found" });
    }
    res.send(game);
  } catch (err) {
    // Gestion des erreurs du serveur
    res.status(500).send({ error: "Server error", details: err.message });
  }
};

module.exports = { getAll, getOne };
