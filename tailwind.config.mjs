// tailwind.config.mjs
import typography from "@tailwindcss/typography";
import forms from "@tailwindcss/forms";
import aspectRatio from "@tailwindcss/aspect-ratio";
import containerQueries from "@tailwindcss/container-queries";

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],

  theme: {
    extend: {
      /* ------------------------------
         FONTE
      ------------------------------ */
      fontFamily: {
        serif: ["Libre Baskerville", "Baskerville", "serif"],
        sans: ["Arial", "Helvetica", "system-ui", "sans-serif"],
      },

      /* ------------------------------
         FARVER
      ------------------------------ */
      colors: {
        "manor-red": {
          50: "#FAE3E5",
          100: "#F5C2C5",
          200: "#ED848A",
          300: "#D63F4E",
          400: "#8E2531",
          500: "#481619",
          600: "#420D13",
          700: "#37080E",
          800: "#2C060A",
          900: "#1E0304",
          950: "#170204",
        },

        linen: {
          50: "#FFFFFF",
          100: "#FCFCFC",
          200: "#F9F9F9",
          300: "#F6F6F5",
          400: "#F5F5F5",
          500: "#F3F3F2",
          600: "#BEBEBD",
          700: "#C1C1BD",
          800: "#595856",
          900: "#2E2E2E",
          950: "#1B1B1B",
        },
      },

      /* ------------------------------
         SPACING — jeres Figma steps
         OBS! Vi extender, så Tailwinds
         normale spacing stadig virker.
      ------------------------------ */
      spacing: {
        8: "8px",
        16: "16px",
        24: "24px",
        32: "32px",
        40: "40px",
        48: "48px",
        54: "54px",
        64: "64px",
        72: "72px",
        80: "80px",
        88: "88px",
        96: "96px",
        104: "104px",
        112: "112px",
        120: "120px",
      },
    },
  },

  plugins: [typography, forms, aspectRatio, containerQueries],
};
