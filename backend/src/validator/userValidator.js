const Joi = require("joi");

const validateUser = (user, createMod) => {
  const mode = createMod ? "required" : "optional";

  const schema = Joi.object({
    email: Joi.string().email().presence(mode),
    password: Joi.string().min(8).max(30).presence(mode),
    confirmPassword: Joi.string().valid(Joi.ref("password")).presence(mode),
    nom: Joi.string().min(3).max(100).presence(mode),
  }).with("password", "confirmPassword"); // Assure que password et confirmPassword sont présents et identiques

  const result = schema.validate(user, { abortEarly: false });

  if (result.error) {
    const errorMessages = result.error.details.map((error) => ({
      message: error.message,
    }));
    return { errorCount: result.error.details.length, errorMessages };
  }
  return false;
};

module.exports = validateUser;

// Importation de Joi :

// const Joi = require("joi");
// Cette ligne importe la bibliothèque Joi, qui est utilisée pour définir des schémas de validation pour les données JavaScript, comme les objets.

// Définition de la fonction validateUser :

// const validateUser = (user, createMod) => {
// Cette ligne définit une fonction validateUser qui prend deux paramètres : user (l'objet utilisateur à valider) et createMod (un booléen qui indique si la validation est pour la création d'un nouvel utilisateur).

// Détermination du mode de validation :

// const mode = createMod ? "required" : "optional";
// Cette ligne utilise l'opérateur ternaire pour définir mode comme "required" si createMod est true, sinon "optional". Cela signifie que si vous créez un nouvel utilisateur, tous les champs seront requis, sinon ils seront optionnels.

// Définition du schéma de validation avec Joi :

// const result = Joi.object({
// Ici, on commence à définir un schéma de validation avec Joi.object(). Ce schéma décrira les règles pour valider l'objet user.

// Règles de validation pour chaque champ :

// Email :

// email: Joi.string().email().presence(mode),
// Cette ligne définit les règles pour le champ email. Il doit être une chaîne (string), une adresse email valide (email()) et sa présence (obligatoire ou optionnelle) est déterminée par mode.

// Password :

// password: Joi.string().min(8).max(30).presence(mode),
// Pour le champ password, il doit être une chaîne, avec une longueur minimale de 8 et maximale de 30 caractères. Sa présence est également déterminée par mode.

//confirmPassword:

//confirmPassword: Joi.string().valid(Joi.ref('password')).presence(mode),
//.with('password', 'confirmPassword');
//confirmPassword qui doit être identique à password. La méthode .with('password', 'confirmPassword') s'assure que les deux champs sont présents et identiques.

// Nom :

// nom: Joi.string().min(3).max(100).presence(mode),
// Pour le champ nom, il doit être une chaîne, avec une longueur minimale de 3 et maximale de 100 caractères. Sa présence est définie par mode.

// Validation et gestion des erreurs :

// .required()
// .min(1)
// .validate(user, { abortEarly: false }).error;
// Ces lignes finalisent le schéma. .required() et .min(1) assurent qu'au moins un champ est présent et valide. .validate(user, { abortEarly: false }) valide l'objet user contre le schéma, et { abortEarly: false } signifie que Joi continuera à valider tous les champs même après avoir trouvé des erreurs, au lieu de s'arrêter à la première.

// Traitement du résultat de la validation :

// if (result) {
// Si result contient des erreurs (non false), le code suivant les traitera.

// Extraction et formatage des messages d'erreur :

// const errorMessages = result.details.map((error) => ({
//   message: error.message,
// }));
// return { errorCount: result.details.length, errorMessages };
// Cette partie extrait les messages d'erreur de result.details et les formate dans un tableau d'objets avec la clé message. Elle renvoie ensuite un objet contenant le nombre d'erreurs et les messages d'erreur.

// Retour en cas de succès :

// return false;
// Si aucune erreur n'est trouvée, la fonction renvoie false, indiquant qu'il n'y a pas d'erreur de validation.

// Exportation de la fonction :

// module.exports = validateUser;
// Cette ligne rend la fonction validateUser disponible pour être importée et utilisée dans d'autres fichiers de votre projet.

// En résumé, ce module définit une fonction de validation pour les objets utilisateur en utilisant Joi. Il permet de personnaliser la validation en fonction de si l'utilisateur est en train d'être créé ou simplement modifié.
