/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2020-06-10T16:06:00+02:00
 * @Copyright: Technology Studio
**/

import type {
  ESLint,
  Linter,
} from 'eslint'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'

import { jsxA11yRules } from './configs/jsx-a11y.js'
import { reactRules } from './configs/react.js'

export const reactConfig: Linter.Config = {
  rules: {
    ...jsxA11yRules,
    ...reactRules,
    ...eslintPluginReactHooks.configs.recommended.rules,
  },
  plugins: {
    'jsx-a11y': eslintPluginJsxA11y,
    'react-hooks': eslintPluginReactHooks,
    // eslint-disable-next-line @typescript-eslint/no-unsafe-type-assertion -- TODO: remove type assertion after types are fixed in eslint-plugin-react - https://github.com/jsx-eslint/eslint-plugin-react/pull/3840
    'react': eslintPluginReact as ESLint.Plugin,
  },
  settings: {
    'import/ignore': [
      'react-native',
      'react-native-keychain',
    ],
  },
}
