import axios from "axios";

// Cette ligne va imprimer la valeur de l'URL
console.log("VITE_BACKEND_URL:", import.meta.env.VITE_BACKEND_URL);

const instance = axios.create({
  // baseURL: import.meta.env.VITE_BACKEND_URL,
  baseURL: "http://localhost:4000",
  withCredentials: true,
});

export default instance;
