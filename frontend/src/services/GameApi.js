import axios from "axios";

// Cette ligne va imprimer la valeur de l'URL pour tester si on l'obtient
console.log("VITE_BACKEND_URL:", import.meta.env.VITE_BACKEND_URL);

const instance = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
  withCredentials: true,
});

export default instance;
