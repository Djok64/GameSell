//FICHIER POUR DEMARRER SERVER
// Importe le module "app" depuis le dossier "src"
const app = require("./src/app");

// Importe les variables d'environnement depuis un fichier .env
require("dotenv").config();

// Récupère le port depuis les variables d'environnement et le convertit en entier
const port = parseInt(process.env.PORT, 10);

// Démarre le serveur sur le port spécifié
app.listen(port, (err) => {
  // Si une erreur se produit, elle est affichée dans la console
  if (err) {
    console.log(err);
  } else {
    // Sinon, affiche l'adresse du serveur dans la console
    console.log(`server adress : http://localhost:${port}`);
  }
});

// Explications
// const app = require("./src/app"); : Cette ligne importe l'application Express que vous avez définie dans un autre fichier. Cela permet de séparer la logique de votre application de la logique de démarrage du serveur.

// require("dotenv").config(); : Cette ligne charge les variables d'environnement depuis un fichier .env dans process.env. C'est utile pour gérer des secrets ou des configurations qui varient entre les environnements (développement, production, etc.).

// const port = parseInt(process.env.PORT, 10); : Ici, vous récupérez le port sur lequel le serveur doit écouter depuis les variables d'environnement. Vous utilisez parseInt pour vous assurer que le port est un nombre entier.

// app.listen(port, (err) => {...}); : Cette fonction démarre le serveur Express sur le port que vous avez spécifié. Elle prend également une fonction de rappel qui est exécutée une fois que le serveur est démarré ou si une erreur se produit.
