/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';

export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/flowbite/**/*.js'  // Include Flowbite components
  ],
  theme: {
    extend: {},
  },
  plugins: [
    flowbite, // Add Flowbite plugin here
  ],
}
