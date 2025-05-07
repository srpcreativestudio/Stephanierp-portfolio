import { defineConfig } from 'astro/config';
import lottie from "astro-integration-lottie";
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [
    lottie(),
    tailwind()
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