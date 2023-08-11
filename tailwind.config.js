/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      boxShadow: {
        '3xl': '1px 1px 250px 35vw #FF002E',
        '4xl': '1px 1px 250px 30vw #8000FF',
        '5xl': '1px 1px 600px 20vw #ff002f62',
        '6xl': '1px 1px 600px 18vw #8000ff38',
        '7xl': '1px 1px 250px 6vw #FF002E',
        '8xl': '1px 1px 300px 30vw #8000ff69',
      },
      
    },
    fontFamily: {
      "julius": ['Julius Sans One', 'sans-serif' ],
      "poppins": ['Poppins', 'sans-serif']
    }
  },
  plugins: [],
}

