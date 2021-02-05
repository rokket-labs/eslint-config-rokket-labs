module.exports = {
  plugins: ['import', 'simple-import-sort', 'security-node'],
  parserOptions: {
    ecmaVersion: 2020,
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
    './rules/orderedImports',
  ].map(require.resolve),
}
