# Construction page

The placeholder page for platform projects that are not ready yet.

[![Vite](https://img.shields.io/badge/Vite-Build-646CFF?style=flat-square&logo=vite)](https://vitejs.dev/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind-v4.3-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)

## Overview

The construction page is a single static HTML page with no framework. `index.html` holds the markup and `src/main.ts` is the only script. When the URL carries a `?ref=` value naming a known project (`console`, `manager`, `wallet`, or `portfolio`), the script puts that project's name in the heading and description. Otherwise the page keeps its default text.

## Architecture

This section explains the technologies and physical layout of the construction page.

- **Build**: Compiled using Vite, with TypeScript for the one script
- **Package manager**: Managed and executed using `bun`
- **Styling**: Styled with Tailwind CSS v4 through `@tailwindcss/vite`

### Project structure

- `public/`: Static assets
- `src/main.ts`: Project name lookup from the `ref` query parameter
- `src/index.css`: Tailwind entrypoint
- `index.html`: The page itself
- `package.json`: Dependencies and scripts
- `vite.config.ts`: Vite configuration
- `vercel.json`: Rewrites every non-asset path to `index.html` and sets the security headers

## Getting started

This section explains how to run the construction page locally. It needs no environment variables.

### Prerequisites

- [Bun](https://bun.sh/) to manage dependencies and run scripts

### Running locally

Install dependencies and start the development server:

```bash
bun install
bun run dev
```

### Build for production

Compile the page into static HTML, CSS, and JS assets for deployment:

```bash
bun run build
```
