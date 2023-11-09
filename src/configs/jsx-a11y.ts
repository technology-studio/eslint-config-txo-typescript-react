/**
 * @Author: Erik Slovak <erik.slovak@technologystudio.sk>
 * @Date: 2022-08-10T14:08:90+02:00
 * @Copyright: Technology Studio
**/

import type { Linter } from 'eslint'

export const jsxA11yRules: Linter.RulesRecord = {
  'jsx-a11y/aria-props': 'error',
  'jsx-a11y/label-has-associated-control': [
    'error',
    {
      // NOTE: If this error triggers, either disable it or add
      // your custom components, labels and attributes via these options
      // See https://github.com/evcohen/eslint-plugin-jsx-a11y/blob/master/docs/rules/label-has-associated-control.md
      controlComponents: ['Input'],
    },
  ],
  'jsx-a11y/mouse-events-have-key-events': 'error',
  'jsx-a11y/role-has-required-aria-props': 'error',
  'jsx-a11y/role-supports-aria-props': 'error',
}
