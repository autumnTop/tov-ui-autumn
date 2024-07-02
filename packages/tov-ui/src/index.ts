import type { App, Plugin } from 'vue'
import pkg from '../package.json'
import * as components from './components.ts'

console.log('Object.entries(components)', Object.entries(components))
// 满足import {Button} from 'tov'
// 满足全局导入
export * from './components'

// 满足import tov from 'tov-ui'
// 满足引用局部
// app.use(tov)
export default {
  install(app: App) {
    Object.entries(components).forEach(([_name, comp]) => {
      if ((comp as any).install)
        app.use(comp as any)
    })
  },
  version: pkg.version,
} as Plugin
