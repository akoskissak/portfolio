/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
      },
      colors: {
        primary: "#0ea5e9", // cyan-500
        accent: "#7c3aed", // purple-600
        glass: "rgba(255,255,255,0.06)",
      },
      backgroundImage: {
        "soft-gradient":
          "linear-gradient(180deg, rgba(255,255,255,0.02), transparent 40%)",
      },
      keyframes: {
        float: {
          "0%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
          "100%": { transform: "translateY(0px)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
