module.exports = {
  rules: {
    'brace-style': ['error', '1tbs'],
    'comma-dangle': ['error', 'only-multiline', { functions: 'never' }],
    'comma-dangle': ['error', {
      arrays: 'only-multiline',
      objects: 'only-multiline',
      imports: 'only-multiline',
      exports: 'only-multiline',
      functions: 'never'
    }],
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
    'eol-last': ['error', 'always'], // Required by Git
    // The following improves readability
    'max-lines': ['warn', 250],
    'max-lines-per-function': ['warn', 100],
    'max-params': ['warn', 3], // Enforce destructuring
    'padding-line-between-statements': [
      'warn',
      {
        blankLine: 'always',
        prev: '*',
        next: [
          'do',
          'if',
          'for',
          'let',
          'try',
          'iife',
          'const',
          'class',
          'block',
          'throw',
          'while',
          'return',
          'switch',
          'export',
          'block-like',
        ],
      },
      { blankLine: 'always', prev: ['const', 'let', 'function'], next: '*' },
      {
        blankLine: 'any',
        prev: ['const', 'let'],
        next: ['const', 'let'],
      },
    ],
  },
}
