import { resolve } from "path";
import { defineConfig } from "vite";

export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        index: resolve(__dirname, "index.html"),
        exchange: resolve(__dirname, "exchange.html"),
      },
    },
  },
});
