import type { App } from 'vue'
import { createNotification } from './instance'

const instance = createNotification()
const _instance = instance as any

_instance.install = (app: App) => {
  app.config.globalProperties.$notification = instance
  // optionsApi
  // this.$notification 就可以调用
}
export default instance
