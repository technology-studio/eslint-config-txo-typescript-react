const txoConfig = require('./lib/index.js')

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = [
  ...txoConfig.default,
  {
    files: ['test/**/*.ts', 'test/**/*.tsx'],
    languageOptions: {
      parserOptions: {
        project: './tsconfig.test.json'
      }
    }
  }
]

module.exports = config
