/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Semantic role tokens (preferred for new code)
        bg: "#FFFFFF",
        body: "#040404",
        heading: "#12317B",
        subheading: "#2061AB",
        accent: {
          DEFAULT: "#2488D0",
          50: "rgba(36, 136, 208, 0.06)",
          100: "rgba(36, 136, 208, 0.10)",
          200: "rgba(36, 136, 208, 0.18)",
          300: "#2488D0",
          400: "#2488D0",
          500: "#2488D0",
          600: "#2488D0",
          700: "#2061AB",
          800: "#2061AB",
          900: "#12317B",
        },
        // Legacy navy palette remapped to the 5-color palette
        navy: {
          50: "rgba(36, 136, 208, 0.04)",
          100: "rgba(32, 97, 171, 0.18)",
          200: "rgba(32, 97, 171, 0.30)",
          300: "rgba(32, 97, 171, 0.45)",
          400: "#2488D0",
          500: "#2488D0",
          600: "#2061AB",
          700: "#040404",
          800: "#040404",
          900: "#12317B",
          950: "#12317B",
        },
        // Brand tokens (used by architecture pages)
        brand: {
          primary: "#2488D0",
          deep: "#2061AB",
          navy: "#12317B",
          black: "#040404",
          tint: "rgba(36, 136, 208, 0.08)",
          line: "rgba(32, 97, 171, 0.18)",
          soft: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: [
          "Inter",
          "system-ui",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "sans-serif",
        ],
      },
      boxShadow: {
        card: "0 1px 2px rgba(4, 4, 4, 0.06), 0 2px 12px rgba(4, 4, 4, 0.06)",
        cardHover:
          "0 2px 4px rgba(4, 4, 4, 0.06), 0 8px 24px rgba(4, 4, 4, 0.08)",
        ring: "0 0 0 1px rgba(32, 97, 171, 0.18)",
      },
      borderRadius: {
        card: "20px",
      },
    },
  },
  plugins: [],
};
