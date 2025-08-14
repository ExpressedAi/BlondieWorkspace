#!/usr/bin/env bash
set -euo pipefail
# run Next dev and MCP servers in background
(node mcp/stdio/dist/index.js &)
(node mcp/http/dist/index.js &)
NEXT_PUBLIC_APP_NAME=${NEXT_PUBLIC_APP_NAME:-Blondie} npm run dev