import classNames from 'classname'
import { computed } from 'vue'

// 看看是不是BEM格式的样式
type BEMType = string | [string, 'B' | 'E' | 'M' | undefined]
export function useClassName(componentName: string) {
  // 命名: 前缀-组件名-自定义后缀.
  const prefix = 'tov'
  const componentClass = `${prefix}-${componentName}`
  const c = (...arg: BEMType[]) => {
    if (arg.length) {
      return arg.reduce((pre, cur) => {
        const agr1 = cur[0]
        const agr2 = cur[1]
        if (Array.isArray(cur)) {
          if (agr2 === 'E')
            return `${pre}__${agr1}`
          else if (agr2 === 'M')
            return `${pre}--${agr1}`
        }

        return `${pre}-${cur}`
      }, componentClass) as string
    }

    return componentClass
  }
  const ce = (e: string) => [e, 'E'] as BEMType
  const cm = (m: string) => [m, 'M'] as BEMType
  // 实现响应式数据
  const cx = (cls: () => Record<string, boolean>) => {
    return computed(() => classNames(cls()))
  }
  return {
    c,
    cx,
    ce,
    cm,
  }
}
