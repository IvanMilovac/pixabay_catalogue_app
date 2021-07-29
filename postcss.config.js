const tailwindcss = require("tailwindcss");

module.exports = {
  plugins: [tailwindcss("./tailwind.js"), require("autoprefixer")],
  theme: {
    extend: {
      transitionProperty: {
        underline: "underline",
      },
    },
  },
  variants: {
    extend: {
      transitionProperty: ["hover", "focus"],
    },
  },
};
