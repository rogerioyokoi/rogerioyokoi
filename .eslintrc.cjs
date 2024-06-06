module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  overrides: [
    {
      files: ['*.ts', '*.tsx'],
      parser: '@typescript-eslint/parser',
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
        ecmaVersion: 'latest',
        sourceType: 'module',
      },
      extends: [
        'eslint:recommended',
        'plugin:@typescript-eslint/recommended',
        'plugin:import/recommended',
        'plugin:react/recommended',
        'plugin:prettier/recommended',
        'plugin:react-hooks/recommended',
        'plugin:react/jsx-runtime',
      ],
      plugins: ['react', '@typescript-eslint', 'react-hooks'],
      rules: {
        'no-use-before-define': 'off',
        '@typescript-eslint/no-use-before-define': ['error'],
        'react/jsx-filename-extension': ['warn', { extensions: ['.tsx'] }],
        'import/extensions': [
          'error',
          'ignorePackages',
          { ts: 'never', tsx: 'never' },
        ],
        '@typescript-eslint/no-shadow': ['error'],
        '@typescript-eslint/explicit-function-return-type': [
          'error',
          { allowExpressions: true },
        ],
        'max-len': [
          'warn',
          { code: 100, ignoreComments: true, ignoreUrls: true },
        ],
        'react-hooks/rules-of-hooks': 'error',
        'react-hooks/exhaustive-deps': 'warn',
        'import/prefer-default-export': 'off',
        'react/prop-types': 'off',
        'prettier/prettier': ['error', { endOfLine: 'auto' }],
      },
      settings: {
        'import/extensions': [
          '.js',
          '.mjs',
          '.jsx',
          '.js',
          '.jsx',
          '.ts',
          '.tsx',
        ],
        react: {
          version: 'detect',
        },
      },
    },
  ],
};
