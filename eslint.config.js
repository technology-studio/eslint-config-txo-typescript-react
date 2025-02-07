import {
  jestConfig,
  stylisticConfig,
  typescriptConfigList,
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
      // TODO: remove after migrating to prettier
      stylisticConfig,
      reactConfig,
    ]
  },
  {
    files: ['__tests__/**/*.ts', '__tests__/**/*.tsx'],
    extends: [
      jestConfig,
    ]
  },
  {
    ignores: [
      'commitlint.config.js',
      'jest.config.js',
      '.releaserc.js',
      'eslint.config.js',
      'coverage',
      'lib',
      'node_modules',
    ]
  }
)
