import { defineConfig } from "vite";
import vitePluginRequire from "vite-plugin-require";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), vitePluginRequire.default()],
  base: "/Million.az-Website-Clone-Project/",
});
