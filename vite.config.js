import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/portfolio/",
  root: ".",
  build: {
    rollupOptions: {
      input: "./index.html",
    },
    outDir: "dist",
  },
});
