import { fileURLToPath } from 'node:url'
import path from 'node:path'
import { defineConfig } from 'vite'
import fs from 'fs-extra'

export default defineConfig({
  build: {
    // 不清空文件夹
    emptyOutDir: false,
    rollupOptions: {
      output: {
        assetFileNames() {
          return 'tov-ui.css'
        },
      },

    },
    lib: {
      entry: 'src/styles.ts',
      formats: ['es'],
      fileName: () => 'tov-ui-style.js',
    },
  },
  plugins: [
    {
      name: 'remove:tov-ui-style.js',
      closeBundle() {
        // 当前路径 拼接 dist
        const tovPath = fileURLToPath(new URL('./dist', import.meta.url))
        const styleFilePath = path.resolve(tovPath, 'tov-ui-style.js')
        console.log('styleFilePath', styleFilePath)
        fs.removeSync(styleFilePath)
      },
    },
  ],
})
