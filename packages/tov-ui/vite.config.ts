import { defineConfig } from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import tsxResolveTypes from 'vite-plugin-tsx-resolve-types'

// 帮助打包后生成类型
import dts from 'vite-plugin-dts'

export default defineConfig({
  plugins: [
    vueJsx(),
    tsxResolveTypes(),
    vue(),
    dts({
      entryRoot: 'src',
      outDir: ['es', 'lib'],
      exclude: ['**/tests/**'],
    }),

  ],
  build: {
    rollupOptions: {
      external: ['@floating-ui/vue', 'vue', '@v-c/utils', 'lodash-es', '@tov-ui-autumn/utils', '@tov-ui-autumn/icons'],
      input: ['src/index.ts'],
      output: [
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          format: 'esm',
          dir: 'es',
        },
        {
          preserveModules: true,
          preserveModulesRoot: 'src',
          entryFileNames: '[name].js',
          exports: 'named',
          format: 'cjs',
          dir: 'lib',
        },
      ],
    },
    lib: {
      entry: 'src/index.ts',
    },
  },
})
