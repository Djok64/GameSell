// Importe le module de connexion à la base de données
const conexionDatabase = require("./conexionDatabase");

// Fonction pour récupérer tous les utilisateurs
const findAll = async () => {
  try {
    // Exécute la requête SQL et stocke le résultat dans 'users'
    const [users] = await conexionDatabase.query("SELECT * FROM `users`");
    return users; // Retourne la liste des utilisateurs
  } catch (err) {
    console.log(err); // Affiche l'erreur si elle se produit
  }
};

// Fonction pour récupérer un utilisateur par son ID
const findOne = async (id) => {
  try {
    // Exécute la requête SQL avec l'ID en paramètre
    const [user] = await conexionDatabase.query(
      "SELECT * FROM `users` WHERE user_id = ?",
      [id]
    );
    return user; // Retourne l'utilisateur trouvé
  } catch (err) {
    console.log(err); // Affiche l'erreur si elle se produit
  }
};

// Fonction pour ajouter un nouvel utilisateur la base de données est regler pour envoyé une erreur si on essaie de creer 2 utilisateur avec le meme user.e-mail
const addOne = async (user) => {
  try {
    // Destructure l'objet utilisateur pour obtenir email, password et nom
    const { email, password, nom } = user;
    // Exécute la requête SQL d'insertion
    const [result] = await conexionDatabase.query(
      "INSERT INTO `users`(`e-mail`, password, nom) values(?, ?, ?)",
      [email, password, nom]
    );
    return { id: result.insertId, email, nom }; // Retourne l'ID inséré et les autres infos
  } catch (err) {
    console.log("erreur:", err); // Affiche l'erreur si elle se produit
    res.status(500).send("Internal Server Error"); // Envoie une réponse d'erreur 500
  }
};

// Fonction pour trouver un utilisateur par son email pour le login
const findByEmail = async (email) => {
  try {
    // Exécute la requête SQL avec l'email en paramètre
    const [user] = await conexionDatabase.query(
      "SELECT * FROM `users` WHERE `e-mail` = ?",
      [email]
    );
    return user; // Retourne l'utilisateur trouvé
  } catch (err) {
    console.log(err); // Affiche l'erreur si elle se produit
    throw err; // Relance l'erreur
  }
};

// Exporte les fonctions pour les utiliser dans d'autres fichiers
module.exports = { findAll, findOne, addOne, findByEmail };

// Explications détaillées :
// Import du module de connexion à la base de données
// const conexionDatabase = require("./conexionDatabase");
// Cette ligne importe le module qui gère la connexion à la base de données MySQL.

// Fonction findAll pour récupérer tous les utilisateurs
// const findAll = async () => { ... }
// Cette fonction utilise une requête SQL pour récupérer tous les utilisateurs de la table users.

// Fonction findOne pour récupérer un utilisateur par son ID
// const findOne = async (id) => { ... }
// Cette fonction utilise l'ID d'un utilisateur comme paramètre pour la requête SQL et récupère les informations de cet utilisateur.

// Fonction addOne pour ajouter un nouvel utilisateur
// const addOne = async (user) => { ... }
// Cette fonction prend un objet user contenant email, password et nom, et insère ces données dans la table users.

// Fonction findByEmail pour trouver un utilisateur par son email
// const findByEmail = async (email) => { ... }
// Cette fonction utilise l'email comme paramètre pour la requête SQL et récupère les informations de l'utilisateur correspondant.

// Export des fonctions
// module.exports = { findAll, findOne, addOne, findByEmail };
// Cette ligne permet d'exporter toutes les fonctions définies pour qu'elles puissent être utilisées dans d'autres fichiers du projet.
