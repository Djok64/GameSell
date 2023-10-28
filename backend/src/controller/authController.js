const { validateLogin } = require("../validator/loginValidator");
const { findByEmail } = require("../model/usersModel");

const { verifyPassword } = require("../helper/argonHelper");

const { encodeJWT } = require("../helper/jwtHelper");

const login = async (req, res) => {
  try {
    const errors = validateLogin(req.body);
    if (errors) {
      return res.status(401).send(errors);
    }
    const [user] = await findByEmail(req.body.email);
    if (!user) {
      return res.status(401).send("Invalid Informations");
    }
    const passwordVerification = await verifyPassword(
      user.password,
      req.body.password
    );
    // console.log("----", passwordVerification);
    if (!passwordVerification) {
      return res.status(401).send("Invalid Informations");
    }
    delete user.password;
    const token = encodeJWT(user);
    // TODO penser a passer secure false a secure true avant la mise en production sur du https:
    res.cookie("auth_token", token, { httpOnly: true, secure: false });
    res.status(200).json({ user: user.nom });
    // res.status(201).json({ token });
    // console.log(token);
  } catch (err) {
    console.log(err);
    return res.sendStatus(500);
  }
};

module.exports = { login };
