import sharp from 'sharp'
import { readdirSync, existsSync } from 'fs'
import { join, extname, basename } from 'path'

const INPUT_DIR = './docs/public'

const files = readdirSync(INPUT_DIR).filter(f =>
  ['.png', '.jpg', '.jpeg'].includes(extname(f).toLowerCase())
)

if (files.length === 0) {
  console.log('Картинок не найдено в', INPUT_DIR)
  process.exit(0)
}

for (const file of files) {
  const src = join(INPUT_DIR, file)
  const base = basename(file, extname(file))

  const webpOut = join(INPUT_DIR, `${base}.webp`)
  const avifOut = join(INPUT_DIR, `${base}.avif`)

  process.stdout.write(`${file} → `)

  await sharp(src).webp({ quality: 82 }).toFile(webpOut)
  process.stdout.write('webp ✓  ')

  await sharp(src).avif({ quality: 60 }).toFile(avifOut)
  process.stdout.write('avif ✓\n')
}

console.log('\nГотово! Теперь замени <img> на <picture> в MD-файлах.')
