
import type { Config} from "tailwindcss"

export default {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      animation: {
        blink: "blink 1.5s linear infinite alternate",
      },

      keyframes: {
        blink: {
          "from, 49.9%": { opacity: "0" },
          "to, 50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
} satisfies Config;
