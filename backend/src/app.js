// Importation du module dotenv pour gérer les variables d'environnement
require("dotenv").config();

// Importation des modules nécessaires
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");

// Importation du routeur personnalisé
const router = require("./router");

// Création d'une nouvelle application Express
const app = express();

// Utilisation de CORS (Cross-Origin Resource Sharing) pour gérer les requêtes cross-origin
// À noter que "*" permet à tous les domaines d'accéder à votre API, ce qui n'est pas recommandé en production
// TODO il faudra regler ce paramètre hors developpement
//il a etait changé ce nest  plus cors({*})
app.use(
  cors({
    origin: process.env.FRONTEND_URL,
    credentials: true,
    optionsSuccessStatus: 200,
  })
);

// Utilisation du middleware express.json() pour parser les requêtes JSON entrantes
app.use(express.json());

// Utilisation du middleware cookie-parser pour gérer les cookies
app.use(cookieParser());

// Route GET pour la racine ("/") de l'application
app.get("/", (req, res) => {
  res.status(200).send("on est la! sur le /  du server dans app");
});

// Utilisation du routeur pour toutes les routes commençant par "/api"
app.use("/api", router);

// Gestion des routes non trouvées (404)
app.get("*", (req, res) => {
  res.status(404).json({ message: "Not found!" });
});

// Exportation de l'application pour utilisation dans d'autres fichiers
module.exports = app;

// Explications détaillées :
// dotenv: Vous utilisez le module dotenv pour charger des variables d'environnement à partir d'un fichier .env.

// Importation des modules: Vous importez les modules nécessaires comme express, cookie-parser et cors.

// Importation du routeur: Vous importez un routeur personnalisé depuis un fichier router.

// Création de l'application: Vous créez une nouvelle application Express.

// Middleware CORS: Vous utilisez le middleware CORS pour permettre les requêtes cross-origin. Ici, vous autorisez toutes les origines, ce qui n'est pas sécurisé pour une application en production.

// Middleware JSON: Vous utilisez express.json() pour analyser les corps de requête JSON.

// Middleware Cookie-Parser: Vous utilisez cookieParser() pour gérer les cookies.

// Route GET pour la racine: Vous définissez une route GET pour la racine ("/") de l'application.

// Utilisation du routeur: Vous utilisez le routeur personnalisé pour toutes les routes qui commencent par "/api".

// Gestion des 404: Vous définissez une route pour gérer les requêtes vers des routes non existantes.

// Exportation de l'application: Vous exportez l'application pour pouvoir l'utiliser dans d'autres fichiers, comme votre fichier de démarrage du serveur.
