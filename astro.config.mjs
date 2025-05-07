// @ts-check
import { defineConfig } from 'astro/config';
import lottie from "astro-integration-lottie";

import tailwindcss from '@tailwindcss/vite';
const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: {
        '@data': path.resolve(__dirname, './src/data')
      }
    }
  },
  integrations: [
    lottie(),
  ]
});