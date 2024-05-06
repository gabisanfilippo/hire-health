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
        "custom-blue": "#4392F9",
        "custom-pink": "#F83758",
        "custom-white": "#FDFDFD",
      },
    },
  },
  plugins: [],
};
export default config;
