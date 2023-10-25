const argon2 = require("argon2");

const hashingOption = {
  type: argon2.argon2id,
  memoryCost: 2 ** 16,
  timeCoast: 5,
  parallelism: 1,
};

const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOption);
};

const verifyPassword = (plainPassword, hashPasswordFromBdd) => {
  return argon2.verify(plainPassword, hashPasswordFromBdd, hashingOption);
};
module.exports = { hashPassword };
