//Middleware pour valider un ID
const validateId = (req, res, next) => {
  // Extraire l'ID de req.params
  const { id } = req.params;

  // Vérifier si l'ID est un entier
  if (!Number.isInteger(parseInt(id, 10))) {
    // Si l'ID n'est pas un entier, renvoyer une erreur 400
    return res.status(400).send({ error: "Invalid ID format" });
  }

  // Si tout est correct, passer au middleware/route suivant(e)
  next();
};

module.exports = validateId;
