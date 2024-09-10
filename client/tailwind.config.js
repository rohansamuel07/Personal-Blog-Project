/** @type {import('tailwindcss').Config} */
import flowbite from 'flowbite/plugin';

export default {
  content: [
    './index.html',                        // Include your HTML file
    './src/**/*.{js,ts,jsx,tsx}',          // Include your React components
    './node_modules/flowbite/**/*.js'      // Include Flowbite components
  ],
  theme: {
    extend: {},                             // Optionally extend default theme here
  },
  plugins: [
    flowbite,                               // Flowbite plugin added
  ],
}
