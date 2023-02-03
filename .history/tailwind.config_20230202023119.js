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
          "0%":{marginTop:"0"},          
          "15%":{marginTop:"0"},
          "25%":{marginTop:"-40"},
          "40%":{marginTop:"-40"},
          "50%":{marginTop:"-80"},
          "65%":{marginTop:"-80"},
          "75%":{marginTop:"-40"},
          "85%":{marginTop:"-40"},
          "100%":{marginTop:"0"},
        },opacity:{
          "0%":{opacity:"0"},
          "50%":{opacity:"1"},
          "100%":{opacity:"0"}
        }
      },animation:{
        textrotate:"flipInOut opacity 6s linear 0s normal none infinite change"
      }
    }
  },
  plugins: [],
}