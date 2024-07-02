import { fileURLToPath } from 'node:url'
import * as path from 'node:path'

// 对node fs的扩展
import fs from 'fs-extra'

// 遍历文件夹的所有文件
import fg from 'fast-glob'
import less from 'less'

const tovDir = fileURLToPath(new URL('../packages/tov-ui', import.meta.url))

// less文件列表
const lessFiles = fg.sync([
  'src/**/style/index.less',
  '!src/style', // 不读这个文件
], {
  cwd: tovDir,
})

async function complie() {
  for (const file of lessFiles) {
    const filePath = path.resolve(tovDir, file)
    // 读取文件
    const lessCode = fs.readFileSync(filePath, 'utf-8')
    // 获取到css
    const cssCode = await less.render(lessCode, {
      paths: [path.dirname(filePath)],
    })
    // 拼接路径 es lib
    const esDir = path.resolve(tovDir, `./es${file.slice(3, file.length - 4)}css`)
    const libDir = path.resolve(tovDir, `./lib${file.slice(3, file.length - 4)}css`)
    // 写入文件
    fs.outputFileSync(esDir, cssCode.css)
    fs.outputFileSync(libDir, cssCode.css)
  }
}
complie()
console.log('l;es', lessFiles)
