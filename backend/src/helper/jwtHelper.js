//FICHIER JSONWEBTOKEN HELPER POUR  ENCODE LE TOKEN ET LE DECODE

// Importe le module "jsonwebtoken" pour gérer les JSON Web Tokens (JWT)
const jwt = require("jsonwebtoken"); // Ligne 1

// Crée une fonction pour encoder un payload en JWT
const encodeJWT = (payload) => {
  // Ligne 4
  return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1h" }); // Ligne 5
};

// Crée une fonction pour décoder un JWT en payload
const decodeJWT = (token) => {
  // Ligne 9
  return jwt.decode(token, process.env.TOKEN_SECRET); // Ligne 10
};

// Exporte les fonctions pour les utiliser dans d'autres fichiers
module.exports = { encodeJWT, decodeJWT }; // Ligne 14

// Explications détaillées :
// Ligne 1 : Import du module jsonwebtoken
// const jwt = require("jsonwebtoken");
// Cette ligne importe le module jsonwebtoken. Ce module est une bibliothèque qui fournit des fonctions pour créer, décoder et vérifier les JSON Web Tokens (JWT).

// Lignes 4-5 : Fonction pour encoder un payload en JWT

// const encodeJWT = (payload) => {
//   return jwt.sign(payload, process.env.TOKEN_SECRET, { expiresIn: "1h" });
// };
// Cette fonction, appelée encodeJWT, prend en argument un payload. Le payload est un objet qui contient des informations que vous souhaitez inclure dans le JWT.

// jwt.sign() est une méthode de la bibliothèque jsonwebtoken qui crée un nouveau JWT.
// process.env.TOKEN_SECRET est la clé secrète utilisée pour signer le JWT. Elle est stockée dans une variable d'environnement pour des raisons de sécurité.
// { expiresIn: "1h" } indique que le token expirera en 1 heure.
// Lignes 9-10 : Fonction pour décoder un JWT en payload

// const decodeJWT = (token) => {
//   return jwt.decode(token, process.env.TOKEN_SECRET);
// };
// Cette fonction, appelée decodeJWT, prend en argument un token (qui est un JWT) et le décode pour obtenir le payload original.

// jwt.decode() est une méthode de la bibliothèque jsonwebtoken qui décode un JWT existant.
// process.env.TOKEN_SECRET est la clé secrète utilisée pour décoder le JWT.
// Ligne 14 : Export des fonctions
// module.exports = { encodeJWT, decodeJWT };
// Cette ligne permet d'exporter les fonctions encodeJWT et decodeJWT afin qu'elles puissent être importées et utilisées dans d'autres fichiers de votre projet.
