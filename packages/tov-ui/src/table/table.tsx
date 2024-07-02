import { defineComponent, isVNode } from 'vue'
import { filterEmpty, isBaseType } from '@v-c/utils'
import { useClassName } from '@tov-ui-autumn/utils'
import { Body } from './body.tsx'
import { Header } from './header.tsx'
import type { TableProps } from './interface.ts'

export default defineComponent(
  (props: TableProps, { slots }) => {
    const { c } = useClassName('table')

    return () => {
      const myCloumns: any[] = props.columns ?? []
      // 模板column和table的column判断， table的column优先级为高
      if (myCloumns.length < 1) {
        myCloumns.length = 0
        const children = filterEmpty(slots.default?.() || [])
        children.forEach((child) => {
          if (isBaseType(child) || !isVNode(child))
            return
          if (child.type && (child as any).type.displayName && (child as any).type.displayName === 'TTableColumn')
            myCloumns.push(child.props)
        })
      }
      const cls = {
        [c()]: true,
      }
      return (
        <table class={cls}>
          <Header columns={myCloumns} v-slots={slots} />
          <Body columns={myCloumns} data={props.data}></Body>
        </table>
      )
    }
  },
  {
    name: 'TTable',
  },
)
