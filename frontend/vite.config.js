import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //Morceaux de code rajouter ci dessous pour modifier le port du frontend
  server: {
    port: 3000,
  },
});
