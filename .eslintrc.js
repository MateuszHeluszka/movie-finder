module.exports = {
  parser: "babel-eslint",
  extends: ["airbnb", "prettier", "prettier/flowtype", "prettier/react"],
  plugins: [
    "flowtype",
    "prettier",
    "react",
    "jsx-a11y",
    "import",
  ],
  env: {
    browser: true,
    es6: true,
    node: true,
  },
  rules: {
    "prettier/prettier": "error",
    "flowtype/define-flow-type": 1,
    "flowtype/use-flow-type": 1,
    "no-use-before-define": 0,
    "global-require": 0,
    "linebreak-style": 0,
    "no-console": 2,
    camelcase: 1,
    "no-underscore-dangle": "off",
    "react/jsx-filename-extension": [1, { extensions: [".js", ".jsx"] }],
    "react/forbid-prop-types": [1, { forbid: ["any", "array"] }],
    "react/prefer-stateless-function": 0,
    "react/prop-types": 0,
    "react/no-unused-state": 1
  },
};
