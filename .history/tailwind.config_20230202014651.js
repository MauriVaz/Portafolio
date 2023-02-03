/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        "gris":"#848484"
      },
      keyframes:{
        spinWords:{
          '10%': { transform: 'translateY(-112%)'},
          '25%': { transform: 'translateY(-100%)'},
          '35%': { transform: 'translateY(-212%)'},   
          '50%': { transform: 'translateY(-200%)'},
          '60%': { transform: 'translateY(-312%)'},
          '75%': { transform: 'translateY(-300%)'},
          '85%': { transform: 'translateY(-412%)'},
          '100%': { transform: 'translateY(-400%)'},                     
        },opacity:{
          "0%":{opacity:"0"},
          "50%":{opacity:"1"},
          "100%":{opacity:"0"}
        }
      },animation:{
        textrotate:"spinWords 6s infinite"
      }
    }
  },
  plugins: [],
}