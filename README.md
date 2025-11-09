# matematikk

A modern web application built with Vite, React, TypeScript, pnpm, and Pico CSS.

## Technology Stack

- **Vite** - Fast build tool and dev server
- **React** - UI component library
- **TypeScript** - Type-safe JavaScript
- **pnpm** - Fast, disk space efficient package manager
- **Pico CSS** - Minimal CSS framework for semantic HTML

## Prerequisites

This project uses [mise](https://mise.jdx.dev/) for managing tool versions. Install mise first:

```bash
curl https://mise.run | sh
```

Or follow the installation instructions at https://mise.jdx.dev/getting-started.html

## Setup

1. Install the required tools using mise:
   ```bash
   mise install
   ```

2. Install dependencies:
   ```bash
   pnpm install
   ```

## Development

Start the development server:

```bash
pnpm run dev
```

The application will be available at http://localhost:5173/

## Build

Build the application for production:

```bash
pnpm run build
```

## Linting

Run ESLint to check code quality:

```bash
pnpm run lint
```

## Preview

Preview the production build locally:

```bash
pnpm run preview
```
