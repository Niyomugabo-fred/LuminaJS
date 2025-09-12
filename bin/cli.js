import { createServer } from '../packages/server.js';
import { buildStatic } from '../packages/build.js';

const command = process.argv[2];

if (command === 'dev') {
  createServer(3000);
} else if (command === 'build') {
  buildStatic();
} else if (command === 'start') {
  const { createProdServer } = await import('../packages/server.js');
  createProdServer(3000);
} else {
  console.log('Usage: dev | build | start');
}
