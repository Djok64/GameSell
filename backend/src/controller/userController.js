// Importe les fonctions du modèle utilisateur pour interagir avec la base de données
const { findAll, findOne, addOne } = require("../model/usersModel.js");

// Importe le validateur pour vérifier les données de l'utilisateur
const validateUser = require("../validator/userValidator");

// Importe la fonction de hachage du mot de passe
const { hashPassword } = require("../helper/argonHelper");

// Fonction asynchrone pour récupérer tous les utilisateurs
const getAll = async (req, res) => {
  try {
    // Utilise la fonction findAll pour récupérer tous les utilisateurs
    const users = await findAll();
    // Envoie les utilisateurs comme réponse
    res.send(users);
  } catch (err) {
    // En cas d'erreur, envoie un statut 500
    res.sendStatus(500);
  }
};

// Fonction asynchrone pour récupérer un utilisateur spécifique par son ID
const getOne = async (req, res) => {
  // Convertit l'ID en nombre entier
  const userId = parseInt(req.params.id, 10);
  try {
    // Vérifie si l'ID est un nombre
    if (isNaN(userId)) {
      // Lance une erreur si l'ID n'est pas un nombre
      throw new Error();
    }
    // Utilise la fonction findOne pour récupérer l'utilisateur par son ID
    const [user] = await findOne(userId);
    // Envoie l'utilisateur comme réponse
    res.send(user);
  } catch (err) {
    // En cas d'erreur, envoie un statut 500
    res.sendStatus(500);
  }
};

// Fonction asynchrone pour créer un nouvel utilisateur
const createOne = async (req, res) => {
  try {
    // Affiche le corps de la requête dans la console (pour le débogage)
    console.log(req.body);
    // Utilise le validateur pour vérifier les données de l'utilisateur
    const errors = validateUser(req.body);
    // Si des erreurs sont trouvées, envoie un statut 401 avec les erreurs
    if (errors) {
      return res.status(401).send(errors);
    }
    // Hash le mot de passe de l'utilisateur
    const hashedPassword = await hashPassword(req.body.password);
    // Affiche le mot de passe haché dans la console (pour le débogage)
    console.log(hashedPassword);
    // Utilise la fonction addOne pour ajouter l'utilisateur à la base de données
    const result = await addOne({ ...req.body, password: hashedPassword });
    // Envoie un statut 201 avec le résultat
    res.status(201).send(result);
  } catch (err) {
    // En cas d'erreur, envoie un statut 500
    res.sendStatus(500);
  }
};

// Exporte les fonctions pour les utiliser dans d'autres fichiers
module.exports = { getAll, getOne, createOne };

// Importation des modules et fonctions
// const { findAll, findOne, addOne } = require("../model/usersModel.js"); : Cette ligne importe trois fonctions du fichier usersModel.js qui sont utilisées pour interagir avec la base de données des utilisateurs.

// const validateUser = require("../validator/userValidator"); : Cette ligne importe une fonction de validation qui sera utilisée pour vérifier les données des utilisateurs avant de les ajouter à la base de données.

// const { hashPassword } = require("../helper/argonHelper"); : Cette ligne importe une fonction pour hacher les mots de passe. Le hachage est une pratique de sécurité pour stocker les mots de passe de manière sécurisée.

// Fonction getAll
// const getAll = async (req, res) => { ... }: Cette fonction asynchrone est utilisée pour récupérer tous les utilisateurs de la base de données. Elle utilise la fonction findAll pour cela et renvoie les utilisateurs trouvés.
// Fonction getOne
// const getOne = async (req, res) => { ... }: Cette fonction asynchrone est utilisée pour récupérer un utilisateur spécifique en utilisant son ID. Elle utilise la fonction findOne pour cela.
// Fonction createOne
// const createOne = async (req, res) => { ... }: Cette fonction asynchrone est utilisée pour créer un nouvel utilisateur. Avant de créer un utilisateur, elle valide les données de l'utilisateur avec la fonction validateUser et hache le mot de passe avec la fonction hashPassword.
// Chaque fonction utilise un bloc try/catch pour gérer les erreurs. Si une opération échoue, un code d'état HTTP 500 est renvoyé, indiquant une erreur côté serveur.
