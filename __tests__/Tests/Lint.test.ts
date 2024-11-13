/* eslint-disable @typescript-eslint/no-magic-numbers */
/* eslint-disable @typescript-eslint/no-require-imports */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
/**
 * @Author: Rostislav Simonik <rostislav.simonik@technologystudio.sk>
 * @Date:   2018-01-09T00:56:40+01:00
 * @Copyright: Technology Studio
**/

const { ESLint } = require('eslint')

test('shoud not have lint issues', async () => {
  const eslint = new ESLint()
  const results = await eslint.lintFiles(['test/**/*.ts'])
  const isWithoutError = results.every((result: { errorCount: number }) => result.errorCount === 0)
  expect(isWithoutError).toBe(true)
}, 20000)
