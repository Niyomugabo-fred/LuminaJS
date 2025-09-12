import fs from 'fs';
import path from 'path';
import { match } from 'path-to-regexp';

const PAGES_DIR = path.resolve('pages');
const API_DIR = path.resolve('pages/api');

function getFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  let files = [];
  for (let entry of entries) {
    const res = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      files = files.concat(getFiles(res));
    } else if (entry.name.endsWith('.js') || entry.name.endsWith('.jsx')) {
      files.push(res);
    }
  }
  return files;
}

export function getRoutes() {
  const pageFiles = getFiles(PAGES_DIR).filter(f => !f.startsWith(API_DIR));
  return pageFiles.map(file => {
    let route = '/' + path.relative(PAGES_DIR, file).replace(/\\/g, '/').replace(/\.(js|jsx)$/, '');
    route = route.replace(/\/index$/, '') || '/';
    return { route, file };
  });
}

export function getApiRoutes() {
  const apiFiles = getFiles(API_DIR);
  return apiFiles.map(file => {
    let route = '/api/' + path.relative(API_DIR, file).replace(/\\/g, '/').replace(/\.js$/, '');
    route = route.replace(/\/index$/, '') || '/api';
    return { route, file };
  });
}

export function matchRoute(url) {
  const routes = getRoutes();
  for (let r of routes) {
    const matcher = match(r.route, { decode: decodeURIComponent });
    const matched = matcher(url);
    if (matched) return { type: 'page', file: r.file, params: matched.params };
  }

  const apis = getApiRoutes();
  for (let a of apis) {
    const matcher = match(a.route, { decode: decodeURIComponent });
    const matched = matcher(url);
    if (matched) return { type: 'api', file: a.file, params: matched.params };
  }

  return null;
}
