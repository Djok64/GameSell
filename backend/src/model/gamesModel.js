const conexionDatabase = require("./conexionDatabase");

const findAll = async () => {
  try {
    const [games] = await conexionDatabase.query("SELECT * FROM `produits`");
    return games;
  } catch (err) {
    console.log(err);
  }
};

const findOne = async (id) => {
  try {
    const [game] = await conexionDatabase.query(
      "SELECT * FROM `produits` WHERE produit_id = ?",
      [id]
    );
    return game;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { findAll, findOne };
