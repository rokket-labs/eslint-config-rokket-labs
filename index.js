module.exports = {
  plugins: ['import'],
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
  },
  env: {
    node: true,
    es6: true,
  },
  extends: [
    './rules/bestPractices',
    './rules/errors',
    './rules/es6',
    './rules/import',
    './rules/style',
    './rules/variables',
  ].map(require.resolve),
}
