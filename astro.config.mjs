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
        '@': '/src',
        '@data': '/src/data',
        '@components': '/src/components'
      }
    }
  }
});