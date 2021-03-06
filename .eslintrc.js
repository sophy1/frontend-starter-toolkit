module.exports = {
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },  
    project: "tsconfig.json"
  },
  plugins: [
    '@typescript-eslint', 'react', 'jsx-a11y',
    "you-dont-need-lodash-underscore", 
    "chai-friendly"
  ],
  env: {
    browser: true,
    jest: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    
      "plugin:@typescript-eslint/recommended",
      "plugin:@typescript-eslint/eslint-recommended",
      "plugin:@typescript-eslint/recommended-requiring-type-checking",
    'plugin:jsx-a11y/recommended',
    'prettier',
    'prettier/react',
    'prettier/@typescript-eslint',
       "plugin:you-dont-need-lodash-underscore/compatible",
        "plugin:chai-friendly/recommended"
  ],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
  },
};
