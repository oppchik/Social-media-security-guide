import { readFileSync, writeFileSync, readdirSync } from 'fs'
import { extname, basename, join } from 'path'
import sharp from 'sharp'

const MD_DIR = './docs'
const PUBLIC_DIR = './docs/public'

function getMdFiles(dir) {
  const results = []
  for (const entry of readdirSync(dir, { withFileTypes: true })) {
    const full = join(dir, entry.name)
    if (entry.isDirectory() && !entry.name.startsWith('.') && entry.name !== 'node_modules') {
      results.push(...getMdFiles(full))
    } else if (entry.name.endsWith('.md')) {
      results.push(full)
    }
  }
  return results
}

async function getSize(src) {
  try {
    const { width, height } = await sharp(src).metadata()
    return { width, height }
  } catch {
    return { width: null, height: null }
  }
}

const imgRe = /<img\s([^>]*?)src="(\.\/public\/[^"]+\.(png|jpe?g))"([^>]*?)\/?\s*>/gi

for (const mdFile of getMdFiles(MD_DIR)) {
  let content = readFileSync(mdFile, 'utf8')
  if (!imgRe.test(content)) continue
  imgRe.lastIndex = 0

  let changed = false
  const result = await (async () => {
    let out = ''
    let last = 0
    let m

    while ((m = imgRe.exec(content)) !== null) {
      const [full, before, src, , after] = m
      out += content.slice(last, m.index)

      const srcPath = src.replace('./public/', PUBLIC_DIR + '/')
      const base = basename(src, extname(src))
      const dir = src.replace(/[^/]+$/, '')
      const { width, height } = await getSize(srcPath)

      const wAttr = width ? ` width="${width}"` : ''
      const hAttr = height ? ` height="${height}"` : ''

      const altMatch = full.match(/alt="([^"]*)"/)
      const alt = altMatch ? altMatch[1] : ''

      out += `<picture>
  <source srcset="${dir}${base}.avif" type="image/avif">
  <source srcset="${dir}${base}.webp" type="image/webp">
  <img src="${src}" alt="${alt}"${wAttr}${hAttr} loading="lazy" decoding="async" fetchpriority="low">
</picture>`

      last = m.index + full.length
      changed = true
    }

    out += content.slice(last)
    return out
  })()

  if (changed) {
    writeFileSync(mdFile, result, 'utf8')
    console.log('✓ обновлён:', mdFile)
  }
}

console.log('\nГотово!')
