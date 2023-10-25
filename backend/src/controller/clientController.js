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
    if (isNaN(clientId)) {
      throw new Error();
    }
    const [client] = await findOne(clientId);
    res.send(client);
  } catch (err) {
    res.sendStatus(500);
  }
};
module.exports = { getAll, getOne };
