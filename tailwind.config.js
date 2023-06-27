/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
      extend: {
        colors: {
          "brand": "#FF3565",
          "pricing": "#36394D",
          "color": "#565252",
        },
        height: {
          '144': '144px',
          '157': '157px',
          '187': '187px',
          '1024': '1024px',
          '300': '300px',
          '400': '400px',
          '65vh': '65vh',
          '78vh': '78vh',
          '100vh': '100vh',
          '45vh': '45vh'

        },
        width: {
          '144': '144px',
          '182': '182px',
          '187': '187px',
          '192': '192px',
          '300': '300px',
          '400': '400px',
          '370': '370px',
          "838": "838px",
          "520": "520px",
          "128": "32rem"
        },
        minHeight: {
          '56': '56px',
          "480": "480px",
        },
        margin: {
          "38": "38px",
          "72px": "72px"
        },
        lineHeight: {
          'extra-loose': '116px',

        }
     
    },
  },
  plugins: [],
}