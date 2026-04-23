import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { vitePrerenderPlugin } from "vite-plugin-prerender";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePrerenderPlugin({
      routes: ["/"], // we can add more routes if needed
    }),
  ],

  server: {
    allowedHosts: ["hm48xf-5173.csb.app"],
  },
});
