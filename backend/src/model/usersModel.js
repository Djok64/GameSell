const conexionDatabase = require("./conexionDatabase");

const findAll = async () => {
  try {
    const [users] = await conexionDatabase.query("SELECT * FROM `users`");
    return users;
  } catch (err) {
    console.log(err);
  }
};

const findOne = async (id) => {
  try {
    const [user] = await conexionDatabase.query(
      "SELECT * FROM `users` WHERE user_id = ?",
      [id]
    );
    return user;
  } catch (err) {
    console.log(err);
  }
};

const addOne = async (user) => {
  try {
    const { email, password, nom } = user;
    const [result] = await conexionDatabase.query(
      "INSERT INTO `users`(`e-mail`, password, nom) values(?, ?, ?)",
      [email, password, nom]
    );
    return { id: result.insertId, email, nom };
  } catch (err) {
    console.log("erreur:", err);
    res.status(500).send("Internal Server Error");
  }
};
module.exports = { findAll, findOne, addOne };
