// import config from "tailwindcss";

const config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Mulish', 'sans-serif']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors:{
        "black":"#11142D",
        "gray":{
          "100":"#E2E2EA",
          "200":"#92929D",
          "500":"#9A9AB0"
        },
        "purple":"#5541D7",
        "white":{
          "500":"#FFFFFF"
        },
        "green":"#42BDA1"

        
      }
    },
  },
  plugins: [],
};
export default config;
