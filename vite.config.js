import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.jsx"), // Archivo principal
      name: "Frameonix",
      fileName: (format) => `frameonix.${format}.js`, // Nombres de archivo de salida
    },
    rollupOptions: {
      external: ["react", "react-dom", "styled-components"], // Excluir dependencias externas
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          "styled-components": "styled",
        },
      },
    },
  },
});
