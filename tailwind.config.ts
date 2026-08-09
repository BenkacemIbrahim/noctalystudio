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
        midnight: {
          DEFAULT: "#0D0B1F",
          950: "#080612",
          900: "#0B0918",
          800: "#13102A",
          700: "#1C1838",
          600: "#2A244D",
        },
        ivory: {
          DEFAULT: "#F5F0E6",
          50: "#FBF8F1",
          100: "#F7F2E8",
          200: "#EFE8D8",
        },
        coral: {
          DEFAULT: "#FF6B6B",
          50: "#FFE5E5",
          100: "#FFCCCC",
          200: "#FF9999",
          300: "#FF8080",
          400: "#FF6B6B",
          500: "#F54A4A",
          600: "#D63838",
        },
        amber: {
          DEFAULT: "#FFB547",
          soft: "#FFD79C",
          deep: "#E8901B",
          glow: "#FFC877",
        },
        teal: {
          DEFAULT: "#4ECDC4",
          soft: "#A3E6E1",
          deep: "#36B0A7",
          mint: "#8EE6DE",
        },
        plum: {
          DEFAULT: "#7B4B94",
          soft: "#B894D4",
          deep: "#5A3570",
        },
      },
      fontFamily: {
        display: ['"Fraunces"', '"Playfair Display"', "Georgia", "serif"],
        serif: ['"Fraunces"', '"Playfair Display"', "Georgia", "serif"],
        sans: ['"Inter"', '"Manrope"', "system-ui", "sans-serif"],
        mono: ['"JetBrains Mono"', "ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        widest2: ".25em",
      },
      keyframes: {
        sparkle: {
          "0%, 100%": { opacity: "0", transform: "scale(0.5)" },
          "50%": { opacity: "1", transform: "scale(1)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        orbit: {
          "0%": { transform: "rotate(0deg) translateX(var(--radius)) rotate(0deg)" },
          "100%": { transform: "rotate(360deg) translateX(var(--radius)) rotate(-360deg)" },
        },
        aurora: {
          "0%, 100%": { transform: "translate(0%, 0%) rotate(0deg)" },
          "33%": { transform: "translate(5%, -5%) rotate(2deg)" },
          "66%": { transform: "translate(-3%, 4%) rotate(-2deg)" },
        },
        gradientShift: {
          "0%, 100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        floatY: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-12px)" },
        },
      },
      animation: {
        sparkle: "sparkle 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
        aurora: "aurora 18s ease-in-out infinite",
        gradientShift: "gradientShift 8s ease infinite",
        floatY: "floatY 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
export default config;
