// 按需加载组件
import type { ComponentResolver } from 'unplugin-vue-components/types'

export function tovUiResolver(): ComponentResolver {
  return {
    type: 'component',
    resolve(name) {
      console.log('name', name)
      if (name.startsWith('T')) {
        return {
          name: name.slice(1),
          from: 'tov-ui',
        }
      }
    },
  }
}
