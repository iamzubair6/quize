import react from "@vitejs/plugin-react-swc";
import * as path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    minify: true,
    manifest: true,
  },
  resolve: {
    alias: [
      { find: "@", replacement: path.resolve(__dirname, "src") },
      { find: "@assets", replacement: path.resolve(__dirname, "src/Assets") },
      {
        find: "@components",
        replacement: path.resolve(__dirname, "src/Components"),
      },
      {
        find: "@pages",
        replacement: path.resolve(__dirname, "src/Pages"),
      },
    ],
  },
  server: {
    port: 3000,
    open: true,
  },
});
