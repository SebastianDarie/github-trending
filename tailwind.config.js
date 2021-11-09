module.exports = {
  purge: ["./src/**/*.tsx", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        accent: "#58a6ff",
        "accent-emphasis": "#1f6feb",
        border: "#30363d",
        default: "#0d1117",
        "fg-default": "#c9d1d9",
        "fg-emphasis": "#f0f6fc",
        "fg-muted": "#8b949e",
        subtle: "#161b22",
      },
      maxWidth: {
        1012: "1012px",
      },
    },
  },
  variants: {
    extend: {
      border: ["first", "last"],
      margin: ["last"],
    },
  },
  plugins: [],
};
