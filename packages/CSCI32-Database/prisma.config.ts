import dotenv from 'dotenv'
import { defineConfig, env } from 'prisma/config'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const configDir = path.dirname(fileURLToPath(import.meta.url))

dotenv.config({
  path: path.join(configDir, '.env'),
})

export default defineConfig({
  schema: path.join(configDir, 'prisma/schema.prisma'),
  datasource: {
    url: env('DATABASE_URL'),
  },
})
