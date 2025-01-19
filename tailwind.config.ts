import type { Config } from "tailwindcss";
import tailwindCSSAnimate from "tailwindcss-animate";

export default {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        black: "var(--black)",
        primary: "var(--primary)",
        "primary-light": "var(--primary-light)",
        orange: "var(--orange)",
        "dark-violet": "var(--dark-violet)",
        "light-blue": "var(--light-blue)",
        secondary: "var(--secondary)",
        "secondary-light": "var(--secondary-light)",
        white: "var(--white)",
        "white-80": "var(--white-80)",
        "dark-gray": "var(--dark-gray)",
        "white-40": "var(--white-40)",
        yellow: "var(--yellow)",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      zIndex: {
        "100": "100",
        "1000": "1000",
      },
    },
  },
  plugins: [tailwindCSSAnimate],
} satisfies Config;
