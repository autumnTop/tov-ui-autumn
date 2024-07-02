import { defineConfig } from 'vite'
import { vitepressDemo } from 'vite-plugin-vitepress-demo'
import vueJsx from '@vitejs/plugin-vue-jsx'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'
import Component from 'unplugin-vue-components/vite'
import alias from './alias'
import { tovUiResolver } from './scripts/tov-ui-resolver'

// import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    tsxResolveTypes(),
    vueJsx(),
    vitepressDemo({
      glob: ['**/demos/*.vue'],
    }),
    Component({
      resolvers: [
        tovUiResolver(),
      ],
    }),
  ],
  server: {
    port: 3000,
  },
  resolve: {
    alias,
  },

})
