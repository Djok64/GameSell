import { useState } from "react";
import { useNavigate } from "react-router-dom";
import GameApi from "../services/GameApi";
import "./Login.css";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    GameApi.post("/api/auth/login", { email, password })
      .then((res) => {
        console.log(res);
        navigate("/games");
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="LoginGlobal">
      {/* Titre du formulaire */}
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="LoginFormGlobal">
        <div className="loginDivInputG">
          {/* Label pour le champ email */}
          <label htmlFor="email" className="loginLabel">
            Email :
          </label>
          <input
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email : Exemple@gmail.com"
            value={email}
          />
        </div>
        <div className="loginDivInputG">
          {/* Label pour le champ mot de passe */}
          <label htmlFor="Password :" className="loginLabel">
            Password :
          </label>
          <input
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Password"
            value={password}
          />
        </div>
        <button type="submit">Connexion</button>
      </form>
    </div>
  );
}

export default Login;

//EXPLICATION LIGNE PAR LIGNE
// import { useState } from "react"; : Importe la fonction useState depuis la bibliothèque React. Cette fonction est utilisée pour gérer l'état local dans les composants fonctionnels.

// import "./Login.css"; : Importe le fichier CSS associé au composant. Cela permet d'appliquer des styles spécifiques à ce composant.

// function Login() { : Déclare un composant fonctionnel appelé Login.

// const [email, setEmail] = useState(""); : Utilise le hook useState pour créer une variable d'état email et une fonction setEmail pour mettre à jour cette variable. La valeur initiale est une chaîne vide.

// const [password, setPassword] = useState(""); : De même, crée une variable d'état password et une fonction setPassword pour la mettre à jour. La valeur initiale est également une chaîne vide.

// const handleSubmit = (e) => { : Déclare une fonction handleSubmit qui sera appelée lorsque le formulaire sera soumis.

// e.preventDefault(); : Empêche le comportement par défaut du navigateur lors de la soumission du formulaire, ce qui empêche la page de se recharger.

// }; : Ferme la fonction handleSubmit.

// return ( : Début de la section JSX qui définit ce que le composant doit rendre.

// <div className="LoginGlobal"> : Crée un conteneur div avec la classe CSS LoginGlobal.

// <h2>Login</h2> : Ajoute un titre de niveau 2 avec le texte "Login".

// <form onSubmit={handleSubmit} className="LoginFormGlobal"> : Déclare un formulaire HTML et lui attribue la classe CSS LoginFormGlobal. La fonction handleSubmit sera appelée lorsque le formulaire sera soumis.

// <div className="loginDivInputG"> : Crée un conteneur div pour le premier champ de saisie, avec la classe CSS loginDivInputG.

// <label htmlFor="email" className="loginLabel"> : Ajoute une étiquette pour le champ email et lui attribue la classe CSS loginLabel.

// Email : : Texte de l'étiquette.

// </label> : Ferme la balise label.

// <input : Déclare un champ de saisie.

// type="email" : Définit le type du champ de saisie comme email.

// onChange={(e) => setEmail(e.target.value)} : Met à jour la variable d'état email chaque fois que la valeur du champ change.

// placeholder="Email : Exemple@gmail.com" : Définit un texte d'espace réservé pour le champ.

// value={email} : Lie la valeur du champ à la variable d'état email.

// /> : Ferme la balise input.

// </div> : Ferme le conteneur div pour le premier champ de saisie.

// <div className="loginDivInputG"> : Crée un autre conteneur div pour le deuxième champ de saisie, avec la même classe CSS.

// <label htmlFor="Password :" className="loginLabel"> : Ajoute une étiquette pour le champ mot de passe.

// Password : : Texte de l'étiquette.

// </label> : Ferme la balise label.

// <input : Déclare un autre champ de saisie.

// type="password" : Définit le type du champ de saisie comme mot de passe.

// onChange={(e) => setPassword(e.target.value)} : Met à jour la variable d'état password chaque fois que la valeur du champ change.

// placeholder="Password" : Définit un texte d'espace réservé pour le champ.

// value={password} : Lie la valeur du champ à la variable d'état password.

// /> : Ferme la balise input.

// </div> : Ferme le conteneur div pour le deuxième champ de saisie.

// <button type="submit">Connexion</button> : Ajoute un bouton pour soumettre le formulaire. Le texte du bouton est "Connexion".

// </form> : Ferme la balise form.

// </div> : Ferme le conteneur div principal.

// ); : Ferme la section JSX.

// } : Ferme la fonction du composant Login.

// export default Login; : Exporte le composant Login pour qu'il puisse être utilisé dans d'autres fichiers
