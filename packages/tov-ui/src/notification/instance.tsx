import { createVNode, render } from 'vue'
import type { NotificationConfig, NotificationInstance } from './interface.ts'
import Notification from './notification.tsx'

export function createNotification() {
  let instance: NotificationInstance
  const info = (config: NotificationConfig) => {
    if (!instance) {
      const body = document.body
      const vm = createVNode(Notification, {
        onReady(_intsance: NotificationInstance) {
          instance = _intsance
          instance.add(config)
        },
      })
      // 把vue和当前实例挂载
      if (config.appContext)
        vm.appContext = config.appContext

      render(vm, body)
    }
    else {
      instance.add(config)
    }
  }
  return {
    info,
  }
}
