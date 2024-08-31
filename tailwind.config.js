import plugin from 'tailwindcss/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'custom-sm': {'max': '400px'},
        'custom-md': {'max': '900px'},
        'min-custom-sm': {'min': '400px'},
      },
      fontFamily: {
        roboto: ['Roboto', 'sans-serif']
      }
    },
  },
  plugins: [
    plugin(function({ addUtilities  }) {
      const newUtilities = {
        '.default-container-wrapper': {
          display: 'flex',
          justifyContent: 'center',
          width: '100%',
          padding: '20px 20px 0px 20px',
        },
        '.default-container': {
          maxWidth: '1300px',
          width: '100%',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover']);
    })
  ],
}

