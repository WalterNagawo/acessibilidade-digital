import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        customBlue: "#1189D6",
        customBlue2: "#0C79BE",
        customBlue3: "#003D64",
        customBlueBg: "#E7F1F8",
        customBlueBg2: "#D6EEFF",
        customBlueBorder: "#A8BBFF",
        customBluePanel: "#0A7AC2",
        customBlueBgFooter: "#0F79BD"
      },
    },
  },
  plugins: [],
};
export default config;
