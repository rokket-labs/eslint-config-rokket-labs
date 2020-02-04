module.exports = {
  rules: {
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'only-multiline', { functions: 'never' }],
    indent: 'off',
    'no-lonely-if': 'error',
    'no-mixed-spaces-and-tabs': 'error',
    'no-trailing-spaces': 'error',
    'no-unneeded-ternary': 'error',
    'object-curly-spacing': ['error', 'always'],
    quotes: ['error', 'single', { allowTemplateLiterals: true }],
    semi: ['error', 'never'],
    'space-before-blocks': ['error', 'always'],
    'space-before-function-paren': [
      'error',
      { anonymous: 'never', named: 'never', asyncArrow: 'always' },
    ],
    'space-in-parens': ['error', 'never'],
    'spaced-comment': ['error', 'always'],
  },
}
