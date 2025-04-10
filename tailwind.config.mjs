/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
    theme: {
      extend: {
        keyframes: {
          bounceUpDown: {
            '0%, 100%': { transform: 'translateY(0)' },
            '50%': { transform: 'translateY(10px)' },
          },
        },
        animation: {
          bounceUpDown: 'bounceUpDown 1.5s ease-in-out infinite',
        },
      },
    },
    plugins: [],
  };