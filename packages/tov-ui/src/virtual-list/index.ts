import type { App } from 'vue'
import VirtualList from './virtual-list.tsx'

VirtualList.install = (app: App) => {
  app.component(VirtualList.name, VirtualList)
}
export default VirtualList
