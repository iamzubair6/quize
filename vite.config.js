import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    manifest: true,
  },
  resolve: {
    alias: {
      "@assets": "/src/assets/",
      "@components": "/src/Components/",
      "@pages": "/src/Pages/",
    },
  },
  server: {
    port: 3000,
    open: true,
  },
});
