import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    allowedHosts: [
      "71e85a438620.ngrok-free.app", // your ngrok domain
    ],
    host: true, // allows external access
    port: 5173, // or whichever port you use
  },
});
