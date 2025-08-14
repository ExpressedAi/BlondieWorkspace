#!/usr/bin/env bash
set -euo pipefail
cp -n .env.example .env.local 2>/dev/null || true
npm install
npm run build:mcp:stdio
npm run build:mcp:http
echo "Bootstrap complete."