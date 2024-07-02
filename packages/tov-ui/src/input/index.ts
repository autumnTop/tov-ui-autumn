import type { App } from 'vue'
import Input from './input.vue'

console.log('Input', Input)
Input.install = (app: App) => {
  app.component(Input.name as string, Input)
}

export default Input
