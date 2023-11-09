//FICHIER ROUTAGE GENERAL
// Importe le module Express
const express = require("express");

// Crée un nouveau routeur Express
const router = express.Router();

// Importe les différents routeurs pour chaque entité
const gameRoutes = require("./gameRoutes");
const userRoutes = require("./userRoutes");
const clientRoutes = require("./clientRoutes");
const commandeRoutes = require("./commandeRoutes");
const authRoutes = require("./authRoutes");

// Importe le middleware d'autorisation
const authorization = require("../middleware/auth");

// Route de base pour vérifier que le routeur fonctionne
router.get("/", (req, res) => {
  res.status(200).send("on est la dans /api sur index.js du dossier routeur");
});

// Utilise les différents routeurs pour chaque entité
router.use("/games", authorization, gameRoutes);
router.use("/users", authorization, userRoutes);
router.use("/clients", authorization, clientRoutes);
router.use("/commandes", authorization, commandeRoutes);
router.use("/auth", authRoutes);

// Exporte le routeur pour l'utiliser dans d'autres fichiers
module.exports = router;

// Explications
// const express = require("express"); : Importe le module Express pour créer le routeur.

// const router = express.Router(); : Crée un nouvel objet "routeur" à partir d'Express.

// const gameRoutes = require("./gameRoutes"); et autres : Importe les différents routeurs que vous avez créés pour chaque entité (jeux, utilisateurs, clients, commandes, auth).

// const authorization = require("../middleware/auth"); : Importe le middleware d'autorisation que vous avez créé.

// router.get("/", (req, res) => {...}); : Définit une route GET pour la racine du routeur. C'est utile pour vérifier que le routeur fonctionne.

// router.use("/games", gameRoutes); : Utilise le routeur gameRoutes pour toutes les requêtes qui commencent par /games.

// router.use("/users", authorization, userRoutes); : Utilise le middleware d'autorisation et le routeur userRoutes pour toutes les requêtes qui commencent par /users.

// router.use("/clients", authorization, clientRoutes); : Utilise le middleware d'autorisation et le routeur clientRoutes pour toutes les requêtes qui commencent par /clients.

// router.use("/commandes", authorization, commandeRoutes); : Utilise le middleware d'autorisation et le routeur commandeRoutes pour toutes les requêtes qui commencent par /commandes.

// router.use("/auth", authRoutes); : Utilise le routeur authRoutes pour toutes les requêtes qui commencent par /auth.

// module.exports = router; : Exporte le routeur pour pouvoir l'utiliser dans le fichier principal de votre application.
