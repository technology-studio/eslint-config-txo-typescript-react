declare module 'eslint-plugin-jsx-a11y' {
  import type {
    ESLint, Linter,
  } from 'eslint'
  export const configs: {
    recommended: Linter.Config
    strict: Linter.Config
  }
  export const flatConfigs: {
    recommended: Linter.Config
    strict: Linter.Config
  }
  export const rules: NonNullable<ESLint.Plugin['rules']>
}
