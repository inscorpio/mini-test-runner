import { glob } from 'glob'
import fs from 'fs/promises'
import * as esbuild from 'esbuild'

const files = await glob.sync('*.spec.js')

const runModule = async (fileContent) => {
  const result = await esbuild.build({
    bundle: true,
    write: false,
    stdin: {
      contents: fileContent + '; import { run } from "./core.js"; run()',
      resolveDir: process.cwd(),
    },
    target: 'esnext'
  })
  new Function(result.outputFiles[0].text)()
}

for (const file of files) {
  const fileContent = await fs.readFile(file, 'utf-8')
  runModule(fileContent)
}




