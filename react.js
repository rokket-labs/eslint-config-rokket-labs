module.exports = {
  extends: ['./index', './rules/react'].map(require.resolve),
  plugins: ['react'],
  env: {
    browser: true,
  },
  settings: {
    react: {
      version: '16',
    },
  },
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
  },
}
