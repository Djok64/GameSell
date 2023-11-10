//FICHIER ROUTAGE POUR LES UTILISATEURS

// Importe le module Express
const express = require("express");

// Crée un nouveau routeur Express
const router = express.Router();

// Importe les fonctions du contrôleur utilisateur
const { getAll, getOne, createOne } = require("../controller/userController");

//Importe la fonction du middleware pour valider l'ID
const validateId = require("../middleware/idValidator");

// Définit la route pour obtenir tous les utilisateurs
router.get("/", getAll);

// Définit la route pour obtenir un utilisateur spécifique par son ID
router.get("/:id", validateId, getOne);

// Définit la route pour créer un nouvel utilisateur
router.post("/", createOne);

// Exporte le routeur pour l'utiliser dans d'autres fichiers
module.exports = router;

// Explications
// const express = require("express"); : Cette ligne importe le module Express, qui est un framework pour Node.js permettant de créer des applications web.

// const router = express.Router(); : Ici, vous créez un nouvel objet "routeur" à partir d'Express. Cet objet vous permet de définir des routes pour votre application.

// const { getAll, getOne, createOne } = require("../controller/userController"); : Cette ligne importe trois fonctions depuis votre contrôleur utilisateur. Ces fonctions seront utilisées pour gérer les différentes routes.

// router.get("/", getAll); : Cette ligne définit une route GET pour la racine (/). Lorsqu'un client envoie une requête GET à cette URL, la fonction getAll du contrôleur utilisateur est appelée.

// router.get("/:id", getOne); : Cette ligne définit une route GET pour récupérer un utilisateur spécifique par son ID. L'ID est un paramètre d'URL, accessible dans le contrôleur via req.params.id.

// router.post("/", createOne); : Cette ligne définit une route POST pour créer un nouvel utilisateur. Lorsqu'un client envoie une requête POST à cette URL, la fonction createOne est appelée.

// module.exports = router; : Enfin, cette ligne exporte l'objet router pour que vous puissiez l'utiliser dans d'autres parties de votre application, comme le fichier principal où vous démarrez votre serveur Express.
