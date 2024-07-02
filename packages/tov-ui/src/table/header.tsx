import { defineComponent } from 'vue'
import { useClassName } from '@tov-ui-autumn/utils'
import type { HeaderProps } from './interface.ts'

export const Header = defineComponent<HeaderProps>({
  name: 'Header',
  setup(props = { columns: [] }) {
    const { c } = useClassName('table')
    return () => {
      const cellCls = {
        [c('cell')]: true,
        [c('header-cell')]: true,
      }
      const renderColumns = () => {
        return props.columns?.map((item) => {
          return <th class={cellCls}>{item.title}</th>
        })
      }
      const rowCls = {
        [c('header-row')]: true,
      }
      const cls = {
        [c('header')]: true,
      }
      return (
        <thead class={cls}>
          <tr class={rowCls}>
            {renderColumns()}
          </tr>
        </thead>
      )
    }
  },

})
