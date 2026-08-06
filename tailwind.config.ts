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
        dark: {
          DEFAULT: "#0A0F1C",
          900: "#070A14",
          800: "#0B1220",
          700: "#111827",
        },
        cream: {
          DEFAULT: "#F2EDE1",
          50: "#FBF8F1",
          100: "#F5F0E6",
          200: "#EFE9DA",
        },
        accent: {
          DEFAULT: "#5BB5E8",
          soft: "#BCD4E6",
          deep: "#3A8AB5",
          pill: "#6CC0EA",
        },
        paper: {
          DEFAULT: "#F5F0E6",
          warm: "#EDE6D6",
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
      },
      animation: {
        sparkle: "sparkle 3s ease-in-out infinite",
        marquee: "marquee 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;
