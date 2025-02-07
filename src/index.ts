/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2020-06-10T16:06:00+02:00
 * @Copyright: Technology Studio
**/

import type {
  Linter,
} from 'eslint'
import eslintPluginReact from 'eslint-plugin-react'
import eslintPluginReactHooks from 'eslint-plugin-react-hooks'
import eslintPluginJsxA11y from 'eslint-plugin-jsx-a11y'

import { jsxA11yRules } from './configs/jsx-a11y.js'
import { reactRules } from './configs/react.js'

export const reactConfig: Linter.Config = {
  rules: {
    ...eslintPluginReactHooks.configs.recommended.rules,
    ...jsxA11yRules,
    ...reactRules,
  },
  plugins: {
    'jsx-a11y': eslintPluginJsxA11y,
    'react-hooks': eslintPluginReactHooks,
    'react': eslintPluginReact,
  },
}
