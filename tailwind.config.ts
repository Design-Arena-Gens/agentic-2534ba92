import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        midnight: "#0f172a",
        aurora: "#38bdf8",
        saffron: "#fdb714",
        mist: "#f8fafc"
      },
      fontFamily: {
        sans: ["'Inter'", "system-ui", "sans-serif"],
        display: ["'DM Sans'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
