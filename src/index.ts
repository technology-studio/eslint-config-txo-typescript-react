/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2020-06-10T16:06:00+02:00
 * @Copyright: Technology Studio
**/

module.exports = {
  extends: [
    'txo-typescript',
    ...[
      './configs/jsx-a11y',
      './configs/react',
      './configs/redux-saga',
    ].map(relativePath => require.resolve(relativePath)),
  ],
  parser: '@typescript-eslint/parser',
  plugins: [
    '@typescript-eslint',
    'redux-saga',
    'react',
    'react-hooks',
    'jsx-a11y',
  ],
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    project: './tsconfig.json',
  },
  rules: {
    strict: 'error',
  },
}
