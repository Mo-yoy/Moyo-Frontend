import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import fs from "node:fs";

export default defineConfig({
  plugins: [
    react({
      jsxImportSource: "@emotion/react",
    }),
    tsconfigPaths(),
    svgr({ include: "**/*.svg?react" }),
  ],
  server: {
    https: {
      key: fs.readFileSync("localhost-key.pem"),
      cert: fs.readFileSync("localhost.pem"),
    },
  },
});
