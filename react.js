module.exports = {
  extends: ['./index', './rules/react', './rules/hooks'].map(require.resolve),
  plugins: ['react', 'react-hooks'],
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
