import type { App } from 'vue'
import Table from './table.tsx'
import { TableColumn } from './table-column.tsx'

(Table as any).install = (app: App) => {
  app.component(Table.name, Table)
  app.component(TableColumn.displayName, TableColumn)
}
export { TableColumn } from './table-column.tsx'
export default Table
