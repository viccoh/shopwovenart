/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
    "./context/**/*.{js,jsx}"
  ],
  theme: {
    extend: {
      colors: {
        // Pulled from the actual yarn colors in the product photography,
        // not a stock palette.
        espresso: "#2B1B14",
        cocoa: "#4A2E1F",
        parchment: "#F3E6CC",
        marigold: "#E4A93B",
        clay: "#C24B23",
        teal: "#3E9B93",
        indigo: "#2C2560",
        ivory: "#FBF6EA"
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        body: ["var(--font-work-sans)", "sans-serif"]
      },
      maxWidth: {
        content: "1240px"
      }
    }
  },
  plugins: []
};
