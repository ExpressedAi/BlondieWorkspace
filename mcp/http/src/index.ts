#!/usr/bin/env node
import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

app.get('/tools', (_req, res) => {
  res.json([{ name: 'echo' }]);
});

app.post('/tool/echo', (req, res) => {
  res.json({ echo: req.body?.text ?? '' });
});

app.get('/sse', (req, res) => {
  res.setHeader('Content-Type', 'text/event-stream');
  res.setHeader('Cache-Control', 'no-cache');
  res.setHeader('Connection', 'keep-alive');
  res.flushHeaders?.();
  res.write(`data: {"ok":true}\n\n`);
});

const port = process.env.PORT || 8787;
app.listen(port, () => console.log(`[mcp-http] listening on :${port}`));
