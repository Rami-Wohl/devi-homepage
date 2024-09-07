import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";
import TailwindCssAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      colors: {
        primary: "#000401",
        secondary: "#4e545c",
        tertiary: "#8d9797",
        light: "#e5e8e8",
        fontPrimary: "#e5e8e8",
        fontSecondary: "#4e545c",
      },
    },
  },
  plugins: [TailwindCssAnimate],
} satisfies Config;
