//FICHIER HASHAGE PASSWORD ARGON2

// Importe le module argon2 pour le hachage de mot de passe
const argon2 = require("argon2");

// Définit les options de hachage
const hashingOption = {
  type: argon2.argon2id, // Type de hachage argon2id
  memoryCost: 2 ** 16, // Coût en mémoire (64K)
  timeCost: 5, // Coût en temps (itérations)
  parallelism: 1, // Parallélisme (nombre de threads)
};

// Fonction pour hacher un mot de passe en clair
const hashPassword = (plainPassword) => {
  return argon2.hash(plainPassword, hashingOption);
};

// Fonction pour vérifier un mot de passe en clair avec son hash
const verifyPassword = (hashPasswordFromBdd, plainPassword) => {
  return argon2.verify(hashPasswordFromBdd, plainPassword, hashingOption);
};

// Exporte les fonctions pour les utiliser dans d'autres fichiers
module.exports = { hashPassword, verifyPassword };

// Explications détaillées :
// Import du module Argon2
// const argon2 = require("argon2");
// Cette ligne importe le module argon2, qui est une bibliothèque de hachage de mot de passe sécurisée.

// Configuration des options de hachage
// const hashingOption = { ... };
// Cette partie configure les options pour le hachage de mot de passe. Le type de hachage utilisé est argon2id, qui est une variante sécurisée d'Argon2.

// Fonction de hachage du mot de passe
// const hashPassword = (plainPassword) => { ... };
// Cette fonction prend un mot de passe en clair (plainPassword) et retourne son hash en utilisant les options définies.

// Fonction de vérification du mot de passe
// const verifyPassword = (hashPasswordFromBdd, plainPassword) => { ... };
// Cette fonction prend un hash de mot de passe stocké dans la base de données (hashPasswordFromBdd) et un mot de passe en clair (plainPassword), et vérifie si le mot de passe en clair correspond au hash.

// Export des fonctions
// module.exports = { hashPassword, verifyPassword };
// Cette ligne exporte les fonctions hashPassword et verifyPassword pour qu'elles puissent être utilisées dans d'autres parties de l'application.
