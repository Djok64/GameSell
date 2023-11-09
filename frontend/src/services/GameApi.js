import axios from "axios";

// Cette ligne va imprimer la valeur de l'URL pour tester si on l'obtient
console.log("VITE_BACKEND_URL:", import.meta.env.VITE_BACKEND_URL);

//Creation instance
const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

export default instance;

// EN RESUME , ce fichier configure une instance d'Axios avec une URL de base et des paramètres spécifiques pour être réutilisée dans toute votre application front-end. Cela simplifie la gestion des requêtes HTTP en vous permettant d'utiliser cette instance préconfigurée au lieu de configurer Axios à chaque fois que vous en avez besoin.

// import axios from "axios";
// Cette ligne importe la bibliothèque axios. Axios est un client HTTP basé sur les promesses pour le navigateur et Node.js.
// Il est utilisé pour effectuer des requêtes HTTP pour communiquer avec des backends et des API.

// console.log("VITE_BACKEND_URL:", import.meta.env.VITE_BACKEND_URL);
// Ici, on affiche la valeur de la variable d'environnement `VITE_BACKEND_URL` dans la console.
// `import.meta.env` est un objet spécial fourni par Vite (un outil de build moderne pour JavaScript)
// qui contient toutes les variables d'environnement qui commencent par `VITE_`.
// Cela permet de vérifier que l'URL de backend est correctement chargée à partir des variables d'environnement.

// const instance = axios.create({
//   baseURL: import.meta.env.VITE_BACKEND_URL,
//   withCredentials: true,
// });
// Cette partie crée une nouvelle instance d'Axios avec des paramètres spécifiques.
// `baseURL` est l'URL de base qui sera utilisée pour toutes les requêtes faites par cette instance.
// Cela signifie que vous n'aurez pas besoin de répéter l'URL complète chaque fois que vous faites une requête;
// vous pourrez simplement spécifier le chemin relatif.
// `withCredentials: true` indique que les requêtes HTTP effectuées par cette instance devraient inclure
// des informations d'identification telles que les cookies ou les en-têtes d'authentification.

// export default instance;
// Finalement, cette ligne exporte l'instance d'Axios que vous avez créée afin que vous puissiez l'importer
// et l'utiliser dans d'autres parties de votre application.
// `export default` signifie que cette instance est l'exportation par défaut du fichier,
// donc lorsque vous importez ce fichier ailleurs, vous importez directement l'instance sans avoir à utiliser des accolades.
