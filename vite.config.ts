import basicSsl from "@vitejs/plugin-basic-ssl";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import checker from "vite-plugin-checker";

export default defineConfig({
  plugins: [
    react(),
    basicSsl(),
    tsconfigPaths(),
    checker({
      overlay: { initialIsOpen: false, position: "br" },
      typescript: true,
      eslint: {
        lintCommand: 'eslint "./src/**/*.{ts,tsx}"',
      },
    }),
  ],
  build: {
    outDir: "./docs",
  },
  base: "/Keyng-Coin/", // Replace <REPO_NAME> with your GitHub repository name
});