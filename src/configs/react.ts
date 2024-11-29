/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2022-08-10T14:08:30+02:00
 * @Copyright: Technology Studio
**/

import type { Linter } from 'eslint'

export const reactRules: Linter.RulesRecord = {
  'react-hooks/rules-of-hooks': 'error',
  'react-hooks/exhaustive-deps': 'error',
  '@stylistic/jsx-first-prop-new-line': ['error', 'multiline'], // TODO: remove after migrating to prettier
  'react/jsx-uses-vars': 'error',
  'react/display-name': 'off',
}
