import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "./index.js"),
        exchange: resolve(__dirname, "./exchange/exchange.js"),
      },
    },
  },
});
