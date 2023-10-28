const conexionDatabase = require("./conexionDatabase");

const findAll = async () => {
  try {
    const [clients] = await conexionDatabase.query("SELECT * FROM `clients`");
    return clients;
  } catch (err) {
    console.log(err);
  }
};

const findOne = async (id) => {
  try {
    const [client] = await conexionDatabase.query(
      "SELECT * FROM `clients` WHERE client_id = ?",
      [id]
    );
    return client;
  } catch (err) {
    console.log(err);
  }
};

module.exports = { findAll, findOne };
