const { decodeJWT } = require("../helper/jwtHelper");

const authorization = async (req, res, next) => {
  try {
    const headerBearerToken = req.headers["authorization"];
    console.log(headerBearerToken);
    if (!headerBearerToken) throw new error();
    const [_, token] = headerBearerToken.split(" ");
    console.log("token seul :", token);
    const data = decodeJWT(token);
    console.log("token decoder :", data);
    if (!data) {
      return res.status(401).send("You're not loged");
    }
    return next();
  } catch (err) {
    console.error(err);
    res.sendStatus(401);
  }
};

module.exports = authorization;
