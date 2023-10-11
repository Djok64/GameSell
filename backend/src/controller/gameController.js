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
  const gameId = parseInt(req.params.id, 10);
  try {
    if (isNaN(gameId)) {
      throw new Error();
    }
    const [game] = await findOne(gameId);
    res.send(game);
  } catch (err) {
    res.sendStatus(500);
  }
};
module.exports = { getAll, getOne };
