import {
  typescriptConfigList,
  stylisticConfig,
  typescriptEslintConfig
} from 'eslint-config-txo-typescript'
import {
  reactConfig,
} from './lib/index.js'

/** @type {import('eslint').Linter.Config[]} */
export default typescriptEslintConfig(
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
