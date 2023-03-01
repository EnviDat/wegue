module.exports = {
  root: true,

  parser: "vue-eslint-parser",
  parserOptions: {
    parser: "@babel/eslint-parser",
    extraFileExtensions: [".vue"],
  },

  env: {
    browser: true,
    node: true,
    es2020: true,
  },
  extends: [
    "plugin:vue/essential",
    "plugin:vue/strongly-recommended",
    "prettier",
  ],
  plugins: ["vue"],
  rules: {
    /* eslint-disable quote-props */
    // 'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",

    // allow semicolons and the end of a statement
    semi: "off",

    // weaken some rules in development mode
    "no-multiple-empty-lines":
      process.env.NODE_ENV === "development" ? "warn" : "error",
    "no-unused-vars": process.env.NODE_ENV === "development" ? "warn" : "error",
    "keyword-spacing":
      process.env.NODE_ENV === "development" ? "warn" : "error",
    "arrow-spacing": process.env.NODE_ENV === "development" ? "warn" : "error",
    /* eslint-enable quote-props */
  },

  overrides: [
    {
      files: [
        "**/__tests__/*.{j,t}s?(x)",
        "**/tests/unit/**/*.spec.{j,t}s?(x)",
      ],
      env: {
        mocha: true,
      },
    },
  ],
};
