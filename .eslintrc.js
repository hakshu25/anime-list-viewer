module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  extends: ["plugin:vue/recommended", "eslint:recommended"],
  rules: {},
  parserOptions: {
    parser: "babel-eslint"
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)'
      ],
      env: {
        jest: true
      }
    }
  ]
}
