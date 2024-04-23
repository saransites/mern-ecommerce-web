/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      backgroundImage: {
        "hero-pattern": "url('/frontend/src/Assets/hero image.png')",
      },
    },
  },
  plugins: [],
};

