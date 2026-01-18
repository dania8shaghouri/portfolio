/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addBase }) {
      addBase({
        "*": { margin: 0, padding: 0, boxSizing: "border-box" },
        body: { margin: 0, padding: 0, overflowX: "hidden" },
      });
    },
  ],
  corePlugins: {
    preflight: true,
  },
};
