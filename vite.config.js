import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        exchange: resolve(__dirname, "exchange.html"),
        index: resolve(__dirname, "src/js/index.js"),
        exchange: resolve(__dirname, "src/js/exchange.js"),
      },
    },
  },
});
