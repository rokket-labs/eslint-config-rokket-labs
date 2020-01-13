module.exports = {
  rules: {
    'no-delete-var': 'error',
    'no-undef': 'error',
    'no-unused-vars': [
      'error',
      { vars: 'all', args: 'none', ignoreRestSiblings: true },
    ],
    'no-use-before-define': ['error', 'nofunc'],
  },
}
