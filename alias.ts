import { fileURLToPath } from 'node:url'
import * as path from 'node:path'

const baseUrl = fileURLToPath(new URL('.', import.meta.url))

export default [
  {
    find: /^tov-ui/,
    replacement: path.resolve(baseUrl, 'packages/tov-ui/src'),
  },
  {
    // 匹配上package.json的name
    find: /^@tov-ui-autumn\/utils/,
    replacement: path.resolve(baseUrl, 'packages/utils/src'),
  },
  {
    find: /^@tov-ui-autumn\/icons/,
    replacement: path.resolve(baseUrl, 'packages/icons/src'),
  },
]
