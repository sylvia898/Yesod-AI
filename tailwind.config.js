/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        navy: {
          50: "#f3f6fb",
          100: "#e3ebf5",
          200: "#c3d2e7",
          300: "#94afd2",
          400: "#5e84b6",
          500: "#3d669c",
          600: "#2f5183",
          700: "#28426a",
          800: "#1e3252",
          900: "#13213a",
          950: "#0a1426",
        },
        accent: {
          DEFAULT: "#0d8b8b",
          50: "#effaf9",
          100: "#d6f1ee",
          200: "#b0e3df",
          300: "#7eccc7",
          400: "#46aba8",
          500: "#0d8b8b",
          600: "#0a6e72",
          700: "#0a5759",
          800: "#0b4548",
          900: "#0c393c",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "-apple-system",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(13, 33, 58, 0.06), 0 2px 8px rgba(13, 33, 58, 0.05)",
        ring: "0 0 0 1px rgba(13, 33, 58, 0.06)",
      },
    },
  },
  plugins: [],
};
