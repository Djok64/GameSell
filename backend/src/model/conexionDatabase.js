//FICHIER DE CONNECTION A LA BASE DE DONNEES POUR CREER DES POOL DE CONECTION

// Importe le module mysql2/promise pour la gestion de MySQL avec des Promises
const mysql = require("mysql2/promise");

// Récupère les variables d'environnement pour la configuration de la base de données
const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;

// Crée un pool de connexions à la base de données avec les paramètres récupérés
const pool = mysql.createPool({
  host: DB_HOST, // Adresse du serveur de la base de données
  user: DB_USER, // Nom d'utilisateur pour se connecter à la base de données
  password: DB_PASSWORD, // Mot de passe pour se connecter à la base de données
  database: DB_NAME, // Nom de la base de données à utiliser
  port: DB_PORT, // Port sur lequel le serveur de base de données écoute
});

// Exporte le pool pour l'utiliser dans d'autres fichiers
module.exports = pool;

// Explications détaillées :
// Import du module MySQL avec Promises
// const mysql = require("mysql2/promise");
// Cette ligne importe le module mysql2/promise qui permet de gérer les connexions MySQL en utilisant des Promises pour un code asynchrone plus propre.

// Récupération des variables d'environnement
// const { DB_HOST, DB_USER, DB_PASSWORD, DB_NAME, DB_PORT } = process.env;
// Cette ligne récupère les variables d'environnement nécessaires pour configurer la connexion à la base de données.

// Création du pool de connexions
// const pool = mysql.createPool({ ... });
// Cette ligne crée un "pool" de connexions à la base de données. Un pool est un ensemble de connexions réutilisables, ce qui est plus efficace que d'ouvrir une nouvelle connexion à chaque fois.

// Configuration du pool de connexions
// Les différentes options (host, user, password, database, port) sont définies pour configurer le pool de connexions.

// Export du pool de connexions
// module.exports = pool;
// Cette ligne exporte le pool de connexions pour qu'il puisse être utilisé dans d'autres fichiers du projet.
