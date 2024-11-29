import {
  typescriptConfigList,
  stylisticConfig,
} from 'eslint-config-txo-typescript'
import typescriptEslint from 'typescript-eslint'
import {
  reactConfig,
} from './lib/index.js'

/** @type {import('eslint').Linter.Config[]} */
export default typescriptEslint.config(
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
