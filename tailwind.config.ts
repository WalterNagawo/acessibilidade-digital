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
        customBlueBg: "#E7F1F8",
        customBlueBorder: "#A8BBFF",
      },
    },
  },
  plugins: [],
};
export default config;
