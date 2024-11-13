/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-require-imports */
/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2020-06-10T16:06:00+02:00
 * @Copyright: Technology Studio
**/

import type { Linter } from 'eslint'

import { jsxA11yRules } from './configs/jsx-a11y'
import { reactRules } from './configs/react'

const eslintPluginReact = require('eslint-plugin-react')
const eslintPluginReactHooks = require('eslint-plugin-react-hooks')
const eslintPluginJsxA11y = require('eslint-plugin-jsx-a11y')

export const reactConfig: Linter.Config = {
  rules: {
    ...jsxA11yRules,
    ...reactRules,
    ...eslintPluginReactHooks.configs.recommended.rules,
  },
  plugins: {
    'jsx-a11y': eslintPluginJsxA11y,
    'react-hooks': eslintPluginReactHooks,
    'react': eslintPluginReact,
  },
  settings: {
    'import/ignore': [
      'react-native',
      'react-native-keychain',
    ],
  },
}
