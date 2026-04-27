/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lp: {
          blue:       "#003189",
          darkblue:   "#001e5a",
          yellow:     "#FFCD00",
          green:      "#00863E",
          lightgreen: "#EBF5EB",
          gray:       "#F7F7F7",
          border:     "#E0E0E0",
          text:       "#1A1A2E",
          muted:      "#666666",
        },
      },
      fontFamily: {
        sans: ["'Arial'", "sans-serif"],
        display: ["'Arial'", "sans-serif"],
      },
      boxShadow: {
        card: "0 2px 8px rgba(0,0,0,0.08)",
        header: "0 2px 10px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
