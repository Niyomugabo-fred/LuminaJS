import fs from 'fs';
import path from 'path';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
import { getRoutes } from './router.js';

export function buildStatic() {
  const routes = getRoutes();
  const dist = path.resolve('dist');
  if (!fs.existsSync(dist)) fs.mkdirSync(dist);

  routes.forEach(async r => {
    const Page = (await import(r.file)).default;
    const html = ReactDOMServer.renderToString(React.createElement(Page));
    const outPath = r.route === '/' ? 'index.html' : r.route.slice(1) + '.html';
    fs.writeFileSync(path.join(dist, outPath), `
      <!DOCTYPE html>
      <html>
        <head><title>My Framework</title></head>
        <body><div id="root">${html}</div></body>
      </html>
    `);
    console.log(`Built ${outPath}`);
  });
}
