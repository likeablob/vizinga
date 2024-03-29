module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: 'babel-eslint'
  },
  extends: [
    'standard',
     'plugin:vue/recommended',
     'plugin:prettier/recommended',
  ],
  // required to lint *.vue files
  plugins: [
    'vue'
  ],
  // add your custom rules here
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "prettier/prettier": [
      "error",
      {
        "singleQuote": true,
        "trailingComma": "es5"
      }
    ],
    'no-unused-vars': 'warn',
  }
}
