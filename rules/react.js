module.exports = {
  extends: require.resolve("."),
  plugins: [
    "react",
    "jsx-a11y",
  ],
  rules: {
    "react/jsx-filename-extension": ["error", { extensions: [".js"] }],
    "react/prefer-stateless-function": "off",
    "react/forbid-prop-types": "off",
  },
};
