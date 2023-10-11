// Charger les variables d'environnement du fichier .env
require("dotenv").config();

// Importer les modules requis
const fs = require("fs"); // Module pour lire les fichiers du système
const mysql = require("mysql2/promise"); // Bibliothèque MySQL pour Node.js

const migrate = async () => {
  // Définition de la fonction asynchrone `migrate`
  console.log("Début de la migration..."); // Affiche un message dans la console

  // Récupérer les variables d'environnement pour la configuration de la base de données
  const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, DB_NAME } = process.env;

  // Établir une connexion à la base de données
  const connection = await mysql.createConnection({
    host: DB_HOST, // Adresse du serveur de la base de données
    port: DB_PORT, // Port du serveur de la base de données
    user: DB_USER, // Nom d'utilisateur pour se connecter à la base de données
    password: DB_PASSWORD, // Mot de passe pour se connecter à la base de données
    multipleStatements: true, // Autorise l'exécution de plusieurs requêtes SQL en une seule chaîne
  });

  console.log(connection); // Affiche les détails de la connexion (pour le débogage)

  // Supprimer la base de données si elle existe
  await connection.query(`DROP DATABASE IF EXISTS ${DB_NAME}`);
  console.log(`Base de données ${DB_NAME} supprimée si elle existait.`);

  // Créer une nouvelle base de données
  await connection.query(`CREATE DATABASE ${DB_NAME}`);
  console.log(`Base de données ${DB_NAME} créée.`);

  // Utiliser la nouvelle base de données
  await connection.query(`USE ${DB_NAME}`);
  console.log(`Utilisation de la base de données ${DB_NAME}.`);

  // Lire le fichier SQL pour obtenir les requêtes à exécuter
  const sql = fs.readFileSync("./database.sql", "utf8");

  // Exécuter le script SQL pour créer les tables et insérer les données
  await connection.query(sql);
  console.log("Script SQL exécuté.");

  // Fermer la connexion à la base de données
  connection.end();

  console.log("Migration terminée !"); // Affiche un message indiquant que la migration est terminée
};

try {
  migrate(); // Exécute la fonction de migration
} catch (err) {
  console.error("erreur pendant la migration", err); // Affiche une erreur si quelque chose se passe mal pendant la migration
}
