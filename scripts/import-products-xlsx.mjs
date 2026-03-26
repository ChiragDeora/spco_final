/**
 * Import products from the "top items" Excel into Sanity.
 *
 * Usage:
 *   SANITY_API_WRITE_TOKEN=... VITE_SANITY_PROJECT_ID=... node scripts/import-products-xlsx.mjs [path/to/file.xlsx]
 *   node scripts/import-products-xlsx.mjs --dry-run [path]
 *
 * Requires a token with write access: https://www.sanity.io/manage → Project → API → Tokens
 */

import { createClient } from '@sanity/client'
import XLSX from 'xlsx'
import { readFileSync, existsSync } from 'fs'
import { createHash } from 'crypto'
import path from 'path'
import { fileURLToPath } from 'url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))

/** Load root .env without extra deps (does not override existing env). */
function loadDotEnv() {
  const envPath = path.resolve(__dirname, '..', '.env')
  if (!existsSync(envPath)) return
  const text = readFileSync(envPath, 'utf8')
  for (const line of text.split('\n')) {
    const t = line.trim()
    if (!t || t.startsWith('#')) continue
    const eq = t.indexOf('=')
    if (eq === -1) continue
    const key = t.slice(0, eq).trim()
    let val = t.slice(eq + 1).trim()
    if (
      (val.startsWith('"') && val.endsWith('"')) ||
      (val.startsWith("'") && val.endsWith("'"))
    ) {
      val = val.slice(1, -1)
    }
    if (process.env[key] === undefined) process.env[key] = val
  }
}

const VALID_CATEGORIES = new Set([
  'Ball Bearings',
  'Roller Bearings',
  'Lubricants',
  'Bushes',
  'Auto Parts',
  'Journal & Tilting Pad Bearings',
  'Adaptor Sleeves',
  'Seals',
])

const DEFAULT_CATEGORY = 'Ball Bearings'

function parseArgs(argv) {
  const dryRun = argv.includes('--dry-run')
  const paths = argv.filter((a) => !a.startsWith('--'))
  return { dryRun, filePath: paths[0] || null }
}

function slugify(str) {
  let s = String(str)
    .trim()
    .toLowerCase()
    .replace(/#/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
  if (s.length > 70) s = s.slice(0, 70).replace(/-+$/, '')
  return s
}

function stableKey(parts) {
  return createHash('sha1').update(parts.join('|')).digest('hex').slice(0, 12)
}

function inferCategory(label) {
  const u = String(label).toUpperCase()
  if (u.includes('SEAL') || /\bTC[-\d]/.test(u)) return 'Seals'
  if (u.includes('BUSH') || u.includes('BUSHING')) return 'Bushes'
  if (u.includes('GREASE') || u.includes('LUBRIC')) return 'Lubricants'
  if (
    u.startsWith('4T-') ||
    u.startsWith('SL') ||
    /^22[0234]/.test(u) ||
    /^23[023]/.test(u) ||
    /^24\d/.test(u) ||
    u.includes('EMKD') ||
    u.includes('EAKD') ||
    u.includes('EMD')
  )
    return 'Roller Bearings'
  if (/^6[023]/.test(u) || /^62\d{2}/.test(u) || /^63\d{2}/.test(u) || /^60\d{2}/.test(u))
    return 'Ball Bearings'
  return DEFAULT_CATEGORY
}

function normalizeHeader(h) {
  return String(h ?? '')
    .trim()
    .replace(/\s+/g, ' ')
}

function formatCell(v) {
  if (v === null || v === undefined || v === '') return null
  if (typeof v === 'number' && Number.isFinite(v)) {
    if (Math.abs(v - Math.round(v)) < 1e-9) return String(Math.round(v))
    const rounded = Math.round(v * 100) / 100
    const s = Number.isInteger(rounded) ? String(rounded) : rounded.toFixed(2).replace(/\.?0+$/, '')
    return s
  }
  return String(v).trim() || null
}

function loadRows(filePath) {
  const buf = readFileSync(filePath)
  const wb = XLSX.read(buf, { type: 'buffer' })
  const sheet = wb.Sheets[wb.SheetNames[0]]
  const raw = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null })
  if (!raw.length) return { headers: [], rows: [] }
  const headers = raw[0].map(normalizeHeader)
  const idx = {
    sr: headers.findIndex((h) => h.toLowerCase().startsWith('sr')),
    label: headers.findIndex((h) => /^rowlabels$/i.test(h.replace(/\s/g, '')) || h === 'RowLabels'),
  }
  if (idx.sr === -1 || idx.label === -1) {
    console.error('Expected columns "Sr no" (or similar) and "RowLabels". Found:', headers)
    process.exit(1)
  }
  const colMap = {}
  for (let i = 0; i < headers.length; i++) {
    const h = headers[i]
    if (!h) continue
    colMap[h] = i
  }
  const rows = []
  for (let r = 1; r < raw.length; r++) {
    const line = raw[r]
    if (!line || !line.some((c) => c !== null && c !== undefined && c !== '')) continue
    const sr = line[idx.sr]
    const label = line[idx.label]
    if (label === null || label === undefined || String(label).trim() === '') continue
    rows.push({ sr, label, line, headers })
  }
  return { headers, colMap, rows }
}

function buildDocument(row, labelCounts) {
  const srNum = Number(row.sr)
  const sr = Number.isFinite(srNum) ? srNum : row.sr
  const label = String(row.label).trim()
  const dupLabel = (labelCounts.get(label) || 0) > 1
  const name = dupLabel ? `${label} (Sr. ${sr})` : label

  const base = slugify(label)
  let slugCurrent = base ? `${base}-sr-${sr}` : `item-sr-${sr}`
  if (slugCurrent.length > 96) slugCurrent = `sr-${sr}-${stableKey([label, String(sr)])}`

  const category = inferCategory(label)
  if (!VALID_CATEGORIES.has(category)) {
    throw new Error(`Invalid inferred category: ${category}`)
  }

  const line = row.line
  const specs = []
  const skipIdx = new Set([
    row.headers.findIndex((h) => h.toLowerCase().startsWith('sr')),
    row.headers.findIndex((h) => /^rowlabels$/i.test(h.replace(/\s/g, ''))),
  ])
  for (let i = 0; i < row.headers.length; i++) {
    if (skipIdx.has(i)) continue
    const h = row.headers[i]
    if (!h) continue
    const val = formatCell(line[i])
    if (!val) continue
    specs.push({
      _type: 'productSpecification',
      _key: stableKey([h, val, String(sr), String(i)]),
      key: h,
      value: val,
    })
  }

  const descParts = [
    `${label} — catalog item imported from top-items spreadsheet.`,
    'Adjust category, description, and imagery in Sanity as needed.',
  ]
  if (specs.length) {
    descParts.push('\nKey figures are also listed under Specifications.')
  }

  return {
    _id: `product-top300-sr-${sr}`,
    _type: 'product',
    name,
    slug: { _type: 'slug', current: slugCurrent },
    category,
    description: descParts.join(' '),
    specifications: specs,
  }
}

async function main() {
  loadDotEnv()
  const { dryRun, filePath: argPath } = parseArgs(process.argv.slice(2))
  const filePath =
    argPath ||
    process.env.PRODUCTS_XLSX_PATH ||
    '/Users/chiragdeora/Downloads/top 300 item working.xlsx'

  if (!existsSync(filePath)) {
    console.error('File not found:', filePath)
    console.error('Pass path as first argument or set PRODUCTS_XLSX_PATH.')
    process.exit(1)
  }

  const projectId =
    process.env.VITE_SANITY_PROJECT_ID ||
    process.env.SANITY_STUDIO_PROJECT_ID ||
    process.env.SANITY_PROJECT_ID
  const dataset =
    process.env.VITE_SANITY_DATASET || process.env.SANITY_STUDIO_DATASET || 'production'
  const token = process.env.SANITY_API_WRITE_TOKEN

  const { rows } = loadRows(filePath)
  const labelCounts = new Map()
  for (const row of rows) {
    const lab = String(row.label).trim()
    labelCounts.set(lab, (labelCounts.get(lab) || 0) + 1)
  }

  const docs = rows.map((row) => buildDocument(row, labelCounts))

  console.log(`Rows read: ${rows.length}, documents built: ${docs.length}`)
  if (dryRun) {
    console.log('Dry run — first document sample:', JSON.stringify(docs[0], null, 2))
    return
  }

  if (!projectId || !token) {
    console.error('Set VITE_SANITY_PROJECT_ID (or SANITY_PROJECT_ID) and SANITY_API_WRITE_TOKEN.')
    process.exit(1)
  }

  const client = createClient({
    projectId,
    dataset,
    apiVersion: '2024-01-01',
    token,
    useCdn: false,
  })

  const chunkSize = 25
  for (let i = 0; i < docs.length; i += chunkSize) {
    const batch = docs.slice(i, i + chunkSize)
    const tx = client.transaction()
    for (const doc of batch) {
      tx.createOrReplace(doc)
    }
    await tx.commit()
    console.log(`Committed ${Math.min(i + chunkSize, docs.length)} / ${docs.length}`)
  }

  console.log('Done. Open Sanity Studio to review and publish drafts if your workflow uses drafts.')
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
