const conexionDatabase = require("./conexionDatabase");

const findAll = async () => {
  try {
    const [commandes] = await conexionDatabase.query(
      "SELECT * FROM `commandes`"
    );
    return commandes;
  } catch (err) {
    console.log(err);
  }
};

const findOne = async (id) => {
  try {
    const [commande] = await conexionDatabase.query(
      "SELECT * FROM `commandes` WHERE commande_id = ?",
      [id]
    );
    return commande;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { findAll, findOne };
