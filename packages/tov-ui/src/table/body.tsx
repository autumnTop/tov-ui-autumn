import { defineComponent } from 'vue'
import { useClassName } from '@tov-ui-autumn/utils'
import type { BodyProps } from './interface.ts'

export const Body = defineComponent<BodyProps>(
  (props) => {
    const { c } = useClassName('table')

    return () => {
      const { columns = [], data = [] } = props
      const cellCls = {
        [c('cell')]: true,
        [c('body-cell')]: true,
      }
      function renderCell(item: any) {
        return columns?.map((v) => {
          return (
            <td class={cellCls}>{item[v.key]}</td>
          )
        })
      }
      const rowCls = {
        [c('body-row')]: true,
      }
      const renderData = () => {
        return data.map((item) => {
          return (
            <tr class={rowCls}>{renderCell(item)}</tr>
          )
        })
      }
      const cls = {
        [c('body')]: true,
      }
      return (
        <tbody class={cls}>
          {renderData()}
        </tbody>
      )
    }
  },
)
