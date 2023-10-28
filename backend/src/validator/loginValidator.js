// Importation de la bibliothèque Joi pour la validation des schémas
const Joi = require("joi");

// Définition de la fonction validateLogin qui prend en paramètre un objet utilisateur
const validateLogin = (user) => {
  // Utilisation de Joi pour définir un schéma de validation pour l'objet utilisateur
  const result = Joi.object({
    // Le champ email doit être une chaîne de caractères et un email valide
    email: Joi.string().email().presence("required"),
    // Le champ mot de passe doit être une chaîne de caractères, avec une longueur minimale de 8 et maximale de 30
    password: Joi.string().min(8).max(30).presence("required"),
  })
    // L'objet lui-même est requis
    .required()
    // Validation de l'objet utilisateur selon le schéma défini
    .validate(user, { abortEarly: false }).error;

  // Si la validation échoue, result contiendra les détails de l'erreur
  if (result) {
    // Mapping des messages d'erreur dans un tableau
    const errorMessages = result.details.map((error) => ({
      message: error.message,
    }));
    // Retourne le nombre d'erreurs et les messages d'erreur
    return { errorCount: result.details.length, errorMessages };
  }
  // Si la validation réussit, retourne false
  return false;
};

// Exportation de la fonction validateLogin pour utilisation dans d'autres fichiers
module.exports = { validateLogin };

// Explications détaillées :
// Importation de Joi: Vous importez la bibliothèque Joi, qui est utilisée pour la validation des données.

// Définition de validateLogin: Vous définissez une fonction validateLogin qui prend un objet user en argument.

// Création du schéma de validation: Vous utilisez Joi pour créer un schéma de validation pour l'objet user.

// Validation de l'objet user: Vous validez l'objet user en utilisant le schéma. L'option abortEarly: false permet de collecter toutes les erreurs plutôt que de s'arrêter à la première.

// Vérification des erreurs: Vous vérifiez si des erreurs ont été trouvées pendant la validation.

// Mapping des erreurs: Si des erreurs sont trouvées, vous les mappez dans un tableau errorMessages.

// Retour des erreurs: Vous retournez le nombre d'erreurs et les messages d'erreur.

// Retour en cas de succès: Si la validation est réussie, vous retournez false.

// Exportation de la fonction: Vous exportez la fonction validateLogin pour qu'elle puisse être utilisée dans d'autres fichiers.
