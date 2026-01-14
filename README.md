# LuminaJS

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![CI](https://github.com/Niyomugabo-fred/LuminaJS/workflows/CI/badge.svg)](https://github.com/Niyomugabo-fred/LuminaJS/actions)
[![npm version](https://img.shields.io/npm/v/luminajs.svg?style=flat)](https://www.npmjs.com/package/luminajs)

**LuminaJS** is a minimal, React-based SSR framework inspired by Next.js. It supports dynamic routes, API routes, and can proxy requests to any backend, including Node or PHP servers. Designed to work on **Windows, macOS, and Linux**.

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [CLI Commands](#cli-commands)
- [Routing](#routing)
  - [Static Pages](#static-pages)
  - [Dynamic Pages](#dynamic-pages)
- [API Routes](#api-routes)
- [Backend Proxy](#backend-proxy-php--external-api)
- [Hot Reload](#hot-reload)
- [Static Build](#static-build)
- [Contributing](#contributing--collaboration)
- [License](#license)

---

## Quick Start

Get started with LuminaJS in just a few commands:

```bash
# Clone the repository
git clone https://github.com/Niyomugabo-fred/LuminaJS.git
cd LuminaJS

# Install dependencies
npm install

# Start development server
npm run dev
```

Visit `http://localhost:3000` to see your app running!

---

## Features

* SSR pages (`.jsx` or `.js`)
* Dynamic routes (`[param].jsx`)
* API routes (`pages/api/*.js`)
* Hot reload for pages and APIs
* Proxy requests to any backend (PHP, Node, external APIs)
* Windows-compatible

---

## Installation

```bash
git clone https://github.com/Niyomugabo-fred/LuminaJS.git
cd LuminaJS
npm install
```

Dependencies:

* react / react-dom
* express
* esbuild
* chokidar
* path-to-regexp

---

## Project Structure

```
luminajs/
├─ bin/cli.js            # CLI entry point
├─ packages/
│   ├─ server.js         # Dev server + SSR + API proxy
│   ├─ router.js         # File-based router
│   └─ build.js          # Static HTML generator
├─ pages/
│   ├─ index.jsx
│   ├─ about.jsx
│   └─ blog/[id].jsx
├─ pages/api/
│   └─ users.js
├─ package.json
└─ vite.config.js
```

* Pages using React JSX → `.jsx`
* API routes → `.js`
* Dynamic routes → `[param].jsx`
* PHP backend handled via proxy `/api/*`

---

## CLI Commands

| Command         | Description                                    |
| --------------- | ---------------------------------------------- |
| `npm run dev`   | Start development server (SSR + HMR)           |
| `npm run build` | Build static HTML in `dist/`                   |
| `npm run start` | Start production server serving static `dist/` |

---

## Routing

### Static Pages

* `pages/index.jsx` → `/`
* `pages/about.jsx` → `/about`

### Dynamic Pages

* `pages/blog/[id].jsx` → `/blog/123`
* Dynamic params available as props:

```js
export default function Blog({ id }) {
  return <h1>Blog {id}</h1>;
}
```

---

## API Routes

* Node JS functions in `pages/api/*.js`
* Example:

```js
export default function handler(req, res) {
  return { users: [{ id: 1, name: 'Alice' }] };
}
```

* URL: `/api/users`

---

## Backend Proxy (PHP / External API)

LuminaJS can forward API requests to any backend.

1. Run your backend (e.g., PHP server at `http://localhost:8000`)
2. In `packages/server.js`:

```js
import { createProxyMiddleware } from 'http-proxy-middleware';

const BACKEND_URL = 'http://localhost:8000';

app.use('/api', createProxyMiddleware({
  target: BACKEND_URL,
  changeOrigin: true,
  pathRewrite: { '^/api': '' }
}));
```

* `/api/*` requests are automatically forwarded.
* React pages can fetch data from `/api/...`

---

## Hot Reload

* Any change in `pages/` triggers a server notice:

```
Page/API updated. Refresh the browser.
```

---

## Static Build

```bash
npm run build
```

Generates `dist/` folder:

```
dist/
├─ index.html
├─ about.html
├─ blog/
│   └─ [id].html
```

Serve in production:

```bash
npm run start
```

---

## Contributing / Collaboration

LuminaJS is a **community-driven project**. We welcome contributions to improve:

* Dynamic route handling
* TypeScript support
* Static site generation for dynamic pages
* Vite/HMR integration improvements
* Built-in backend proxy for PHP or other languages

To contribute:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit changes (`git commit -m "Add new feature"`)
4. Push branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please read our [CONTRIBUTING.md](CONTRIBUTING.md) for detailed contribution guidelines.

---

## License

MIT License - see the [LICENSE](LICENSE) file for details.

