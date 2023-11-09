/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/* eslint-disable @typescript-eslint/no-var-requires */
/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2020-06-10T16:06:00+02:00
 * @Copyright: Technology Studio
**/

import type { Linter } from 'eslint'

import { jsxA11yRules } from './configs/jsx-a11y'
import { reactRules } from './configs/react'

const txoConfig = require('eslint-config-txo-typescript')
const react = require('eslint-plugin-react')
const reactHooksPlugin = require('eslint-plugin-react-hooks')
const jsxA11yPlugin = require('eslint-plugin-jsx-a11y')

const config: Linter.FlatConfig[] = [
  ...txoConfig.default,
  {
    files: ['**/*.ts', '**/*.tsx'],
    rules: {
      ...jsxA11yRules,
      ...reactRules,
    },
    plugins: {
      'jsx-a11y': jsxA11yPlugin,
      'react-hooks': reactHooksPlugin,
      react,
    },
  },
]

export default config
