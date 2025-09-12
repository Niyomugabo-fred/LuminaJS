import express from 'express';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { matchRoute } from './router.js';
import chokidar from 'chokidar';
import { build } from 'esbuild';
import fs from 'fs';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

async function loadPage(file) {
  // Transpile JSX to plain JS using esbuild
  const { outputFiles } = await build({
    entryPoints: [file],
    bundle: true,
    write: false,
    format: 'esm',
    platform: 'node',
    loader: { '.js': 'jsx', '.jsx': 'jsx' },
  });
  const tmpFile = path.resolve('.tmp_lumina.js');
  await fs.promises.writeFile(tmpFile, outputFiles[0].text);
  return import(pathToFileURL(tmpFile).href);
}

export function createServer(port = 3000) {
  const app = express();
  app.use(express.json());

  app.get('*', async (req, res) => {
    try {
      const match = matchRoute(req.path);
      if (!match) return res.status(404).send('Page Not Found');

      if (match.type === 'page') {
        const module = await loadPage(match.file);
        const Page = module.default;
        const html = ReactDOMServer.renderToString(
          React.createElement(Page, match.params)
        );

        res.send(`<!DOCTYPE html>
          <html>
            <head><title>LuminaJS</title></head>
            <body><div id="root">${html}</div></body>
          </html>`);
      } else if (match.type === 'api') {
        const handlerFileUrl = pathToFileURL(match.file).href;
        const handler = (await import(handlerFileUrl)).default;
        const result = await handler(req, res);
        if (!res.headersSent) res.json(result);
      }
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });

  chokidar.watch(path.resolve('pages')).on('change', () => {
    console.log('Page/API updated. Refresh the browser.');
  });

  app.listen(port, () => console.log(`LuminaJS dev server running on http://localhost:${port}`));
}

export function createProdServer(port = 3000) {
  const app = express();
  app.use(express.static('dist'));

  app.listen(port, () => console.log(`LuminaJS production server running on http://localhost:${port}`));
}
