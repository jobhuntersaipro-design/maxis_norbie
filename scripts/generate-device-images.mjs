// Generates clean, TRANSPARENT (background-free) device illustrations for each
// hero device, plus a default OG image.
//
// These are placeholders — drop real transparent product cut-outs (1200x1200
// PNG/WebP named by slug) into /public/devices to replace them. The site renders
// device images with object-contain, so any 1:1 transparent asset fits perfectly.
//
// Run: node scripts/generate-device-images.mjs
import { writeFileSync, mkdirSync } from 'node:fs'
import { fileURLToPath } from 'node:url'
import { dirname, join } from 'node:path'

const __dirname = dirname(fileURLToPath(import.meta.url))
const outDir = join(__dirname, '..', 'public', 'devices')
mkdirSync(outDir, { recursive: true })

const GREEN = '#8DC63F'
const BODY = '#1b2230'
const BODY_EDGE = '#0f1420'

const SQUIGGLE =
  'M50.5,29.9c-1.9-4.9-5.8-10.8-9-14.4c1.8,1,4,2.2,5.3,2.9c1.1,0.6,2.1,0.7,2.8,0.2c0.7-0.5,1.5-1.8,0.2-4.7C46.2,6.3,38.3,1.1,29.6,0c-0.9-0.1-1.5,0.2-1.6,0.8c-0.1,0.6,0.3,1.2,1.2,1.5c4.5,1.3,9.9,3.9,13.2,9.7C33.8,6.7,24.7,3.8,16,2.7c-1.2-0.2-2,0.3-2.1,1.1c-0.1,0.8,0.4,1.5,1.7,1.8c8.1,2.2,18.6,6.7,25.9,19.7C32.1,17.3,17.9,10.9,6.1,9.1c-1.3-0.2-2.1,0.3-2.3,1.1c-0.2,0.8,0.3,1.6,1.7,2.1c9.2,3,22.2,10.1,29,24.6c-6.8-7.2-21.2-15-31.8-17.4c-1.4-0.3-2.2,0.1-2.5,0.9c-0.3,0.8,0.2,1.7,1.5,2.3c5.9,2.6,14.5,8.1,18.9,17.1c-2.6-1.9-7.6-5.6-13.1-7.2c-4.8-1.4-7.3,0.9-4.6,5.8c1.9,3.5,6.3,7.7,10,10c1.5,0.9,2.7-0.6,1.3-1.9c-3.1-2.9-5.4-5.4-6.1-6.9c-0.5-1.2,0.3-1.7,1.7-1c4.9,2.3,9.7,6.5,12.6,9.1c1.3,1.1,3.3,3,5.4,2.3c1.7-0.6,2.1-2.7,1.3-5.4c-1.1-3.8-3.1-7.1-4.4-9.3c3.6,2.7,7.7,6.5,11.2,9.9c1.8,1.8,4,3.6,6.2,2.7c2-0.8,2.1-3.4,1.5-5.8C42.4,37,38.9,31,36.7,27.8c2.2,1.4,5.7,4.3,8.5,6.4c1.8,1.4,3.3,1.7,4.5,1C51,34.5,51.4,32.4,50.5,29.9L50.5,29.9z'

// All drawn on a 1000x1000 transparent canvas, device centred.
function phone() {
  return `
    <ellipse cx="500" cy="880" rx="210" ry="34" fill="#000000" opacity="0.08"/>
    <rect x="320" y="120" width="360" height="740" rx="66" fill="${BODY_EDGE}"/>
    <rect x="332" y="132" width="336" height="716" rx="58" fill="${BODY}"/>
    <rect x="352" y="176" width="296" height="628" rx="30" fill="url(#screen)"/>
    <rect x="452" y="150" width="96" height="14" rx="7" fill="#000000" opacity="0.5"/>
    <g transform="translate(430,410) scale(2.6)" opacity="0.9"><path fill="#ffffff" d="${SQUIGGLE}"/></g>`
}

function tablet() {
  return `
    <ellipse cx="500" cy="880" rx="270" ry="34" fill="#000000" opacity="0.08"/>
    <rect x="210" y="150" width="580" height="700" rx="46" fill="${BODY_EDGE}"/>
    <rect x="222" y="162" width="556" height="676" rx="38" fill="${BODY}"/>
    <rect x="252" y="196" width="496" height="608" rx="18" fill="url(#screen)"/>
    <g transform="translate(430,410) scale(2.8)" opacity="0.9"><path fill="#ffffff" d="${SQUIGGLE}"/></g>`
}

function wearable() {
  return `
    <ellipse cx="500" cy="880" rx="150" ry="28" fill="#000000" opacity="0.08"/>
    <path d="M410,250 l14,-118 h152 l14,118 Z" fill="${BODY}"/>
    <path d="M410,750 l14,118 h152 l14,-118 Z" fill="${BODY}"/>
    <rect x="360" y="330" width="280" height="340" rx="72" fill="${BODY_EDGE}"/>
    <rect x="374" y="344" width="252" height="312" rx="60" fill="${BODY}"/>
    <rect x="398" y="368" width="204" height="264" rx="44" fill="url(#screen)"/>
    <g transform="translate(448,452) scale(1.9)" opacity="0.9"><path fill="#ffffff" d="${SQUIGGLE}"/></g>`
}

const shapes = { phone, tablet, wearable }

function deviceSvg(category) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1000" height="1000" viewBox="0 0 1000 1000" fill="none">
  <defs>
    <linearGradient id="screen" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0" stop-color="#3a4a24"/>
      <stop offset="1" stop-color="${GREEN}"/>
    </linearGradient>
  </defs>
  ${shapes[category]()}
</svg>`
}

function ogSvg() {
  const w = 1200
  const h = 630
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${w}" height="${h}" viewBox="0 0 ${w} ${h}" role="img" aria-label="Maxis Deals">
  <rect width="${w}" height="${h}" fill="#10180a"/>
  <g transform="translate(980,60) scale(3.2)" opacity="0.25"><path fill="${GREEN}" d="${SQUIGGLE}"/></g>
  <g transform="translate(-40,360) scale(3.2)" opacity="0.12"><path fill="${GREEN}" d="${SQUIGGLE}"/></g>
  <text x="80" y="250" font-family="Manrope, Arial, sans-serif" font-size="40" font-weight="700" fill="${GREEN}" letter-spacing="2">MAXIS DEALS</text>
  <text x="78" y="340" font-family="Manrope, Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff">Phones, plans &amp; fibre —</text>
  <text x="78" y="430" font-family="Manrope, Arial, sans-serif" font-size="76" font-weight="800" fill="#ffffff">sorted over WhatsApp.</text>
  <text x="80" y="510" font-family="Manrope, Arial, sans-serif" font-size="34" font-weight="600" fill="#c3cbb4">Putra Heights · Petaling Jaya · Selangor</text>
</svg>`
}

const { devices } = await import('./device-manifest.mjs')

let count = 0
for (const d of devices) {
  writeFileSync(join(outDir, `${d.slug}.svg`), deviceSvg(d.category))
  count++
}
mkdirSync(join(__dirname, '..', 'public', 'brand'), { recursive: true })
writeFileSync(join(__dirname, '..', 'public', 'brand', 'og-default.svg'), ogSvg())

console.log(`Generated ${count} transparent device images + og-default.svg`)
