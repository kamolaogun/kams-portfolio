import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        signature: ["var(--font-caveat)", "cursive"],
      },
      colors: {
        accent: "#0066FF",
      },
      letterSpacing: {
        tighter: "-0.04em",
        tight: "-0.02em",
      },
      animation: {
        "spin-slow": "spin 10s linear infinite",
        "spin-very-slow": "spin 16s linear infinite",
      },
    },
  },
  plugins: [],
};

export default config;
