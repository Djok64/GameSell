// Importation de la fonction decodeJWT depuis le fichier jwtHelper.js
const { decodeJWT } = require("../helper/jwtHelper");

// Définition du middleware d'autorisation
const authorization = async (req, res, next) => {
  try {
    // Récupération du token d'autorisation depuis les en-têtes de la requête
    // const headerBearerToken = req.headers["authorization"];
    // console.log(headerBearerToken); // Affichage du token pour le débogage
    const token = req.cookies["auth_token"];
    // Si le token n'est pas présent, une erreur est lancée
    // if (!headerBearerToken) throw new error();
    if (!token) throw new error();
    // Destructuration pour obtenir le token seul (après "Bearer ")
    // const [_, token] = headerBearerToken.split(" ");
    console.log("token seul :", token); // Affichage du token seul pour le débogage

    // Décodage du token pour obtenir les données
    const data = decodeJWT(token);
    console.log("token decoder :", data); // Affichage des données décodées pour le débogage

    // Si les données ne sont pas valides, retourne une réponse avec le statut 401
    if (!data) {
      return res.status(401).send("You're not loged");
    }
    req.userId = data.user_id;
    req.userName = data.nom;
    // Si tout est bon, passe au middleware suivant
    return next();
  } catch (err) {
    // En cas d'erreur, affiche l'erreur et retourne une réponse avec le statut 401
    console.error(err);
    res.sendStatus(401);
  }
};

// Exportation du middleware
module.exports = authorization;

// Explications détaillées :
// Importation de decodeJWT: Vous importez la fonction decodeJWT depuis un fichier helper pour décoder les tokens JWT.

// Définition du middleware authorization: Vous créez un middleware asynchrone appelé authorization.

// Récupération du token: Vous récupérez le token d'autorisation depuis les en-têtes de la requête HTTP.

// Vérification de la présence du token: Vous vérifiez si le token est présent. S'il ne l'est pas, une erreur est lancée.

// Extraction du token: Vous utilisez la méthode split pour séparer le "Bearer" du token lui-même.

// Décodage du token: Vous utilisez la fonction decodeJWT pour décoder le token et obtenir les données qu'il contient.

// Vérification des données: Vous vérifiez si les données décodées sont valides. Si elles ne le sont pas, une réponse avec le statut 401 est retournée.

// Passage au middleware suivant: Si tout est en ordre, le middleware passe au suivant dans la chaîne.

// Gestion des erreurs: Si une erreur se produit à n'importe quelle étape, elle est capturée et une réponse avec le statut 401 est retournée.
