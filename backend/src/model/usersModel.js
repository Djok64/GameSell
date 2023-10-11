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

module.exports = { findAll, findOne };
