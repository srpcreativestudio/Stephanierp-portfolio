import { defineConfig } from 'astro/config';
import lottie from "astro-integration-lottie";
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  integrations: [
    lottie(),
    tailwindcss()
  ],
  vite: {
    resolve: {
      alias: {
        '@data': '/src/data'
      }
    },
    build: {
      rollupOptions: {
        external: ['../data/navigation.js']
      }
    }
  }
});