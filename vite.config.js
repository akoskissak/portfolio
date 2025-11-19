import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { esbuildCommonjs } from "@originjs/vite-plugin-commonjs";

export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    esbuildOptions: {
      plugins: [esbuildCommonjs(["@emotion/is-prop-valid", "framer-motion"])],
    },
  },
  base: "/portfolio/",
  root: ".",
  build: {
    rollupOptions: {
      input: "./index.html",
    },
    outDir: "dist",
  },
});
