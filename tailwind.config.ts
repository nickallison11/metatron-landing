import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-dm-sans)", "Arial", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      colors: {
        "metatron-accent": "#6c5ce7",
        "metatron-accent-hover": "#7d6ff0",
        "metatron-teal": "#00cec9",
      },
    },
  },
  plugins: [],
} satisfies Config;
