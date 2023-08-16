/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        blue: "#007AFF",
    lightBlue: "#56CCF2",
    black: "#0A0A0A",
    offSetBlack: "#121214",
    lightBlack: "#232323",
    gray: "#a6a6a6",
    white: "#ffffff",
    cyan: "#18BEBE",
    yellow: "#F2C94C",
    green: "#6FCF97",
    red: "#EB5757",
    orange: "#F2994A",
    purple: "#BB6BD9",
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        raleway: ['Raleway', 'sans-serif'],
        lato: ['Lato', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
