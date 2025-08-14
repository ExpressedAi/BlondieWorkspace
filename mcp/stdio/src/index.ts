#!/usr/bin/env node
import readline from 'node:readline';

// Minimal JSON-RPC over stdio echo server with fs.read (safe)
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });

function respond(id: any, result: any) {
  const msg = JSON.stringify({ jsonrpc: '2.0', id, result });
  process.stdout.write(msg + '\n');
}

function error(id: any, code: number, message: string) {
  const msg = JSON.stringify({ jsonrpc: '2.0', id, error: { code, message } });
  process.stdout.write(msg + '\n');
}

import { readFile } from 'node:fs/promises';

rl.on('line', async (line) => {
  try {
    const req = JSON.parse(line);
    if (req.method === 'tools.list') {
      respond(req.id, [{ name: 'echo' }, { name: 'fs.read' }]);
      return;
    }
    if (req.method === 'echo') {
      respond(req.id, { echo: req.params?.text ?? '' });
      return;
    }
    if (req.method === 'fs.read') {
      const path = req.params?.path as string;
      if (!path || path.includes('..')) return error(req.id, -32000, 'invalid path');
      const data = await readFile(path, 'utf8');
      respond(req.id, { data });
      return;
    }
    error(req.id, -32601, 'method not found');
  } catch (e:any) {
    error(null, -32700, e.message);
  }
});
