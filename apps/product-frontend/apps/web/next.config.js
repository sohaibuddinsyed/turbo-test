import { fileURLToPath } from "url"
import { dirname } from "path"
import path from "path"

const __dirname = dirname(fileURLToPath(import.meta.url))

/** @type {import('next').NextConfig} */
const nextConfig = {
  outputFileTracingRoot: path.join(__dirname, "../../"),
  output: "standalone",
}

export default nextConfig
