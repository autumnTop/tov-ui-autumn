import type { App } from 'vue'
import Tooltip from './index.tsx'

Tooltip.install = (app: App) => {
  app.component(Tooltip.name as string, Tooltip)
}

export default Tooltip
