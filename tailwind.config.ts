import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        green: "#00606C",
        white: "#fff",
        lightGreen: "#029090",
        lightWhite: "rgba(255, 255, 255, 0.55)",
        greenBright: " #29FFFE",
      },
      screens: {
        xs: "450px",
        sm: "650px",
        md: "900px",
        lg: "1200px",
      },
    },
  },
  plugins: [],
};
export default config;
