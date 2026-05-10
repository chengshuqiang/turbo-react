import { fileURLToPath } from 'url'
import { dirname, join } from 'path'

const __filename = fileURLToPath(import.meta.url)
const __dirname = dirname(__filename)

export const DATA_FILE = join(__dirname, '../data/db.json')
export const PORT = 3100
