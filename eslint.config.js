const {
  typescriptConfigList,
  stylisticConfig,
} = require('eslint-config-txo-typescript')
const typescriptEslint = require('typescript-eslint')
const {
  reactConfig,
} = require('./lib')

/** @type {import('eslint').Linter.FlatConfig[]} */
const config = typescriptEslint.config(
  {
    files: ['**/*.ts', '**/*.tsx'],
    extends: [
      ...typescriptConfigList,
      stylisticConfig,
      reactConfig,
    ]
  },
  {
    ignores: [
      'coverage',
      'lib',
      'node_modules',
    ]
  }
)

module.exports = config
