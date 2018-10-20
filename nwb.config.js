module.exports = {
  type: "react-component",
  npm: {
    esModules: true,
    umd: {
      global: "SvgAnimation",
      externals: {
        react: "React",
        "svg.js": "SVG",
      },
    },
  },
};
