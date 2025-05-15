# Vue 3 + TypeScript + Vite Standard Template

A modern Vue 3 starter template using Vite, TypeScript, Pinia, Vue Router, Tailwind CSS, and more. This template is designed for scalable, maintainable, and productive Vue development.

## Features

- **VueJS** with Composition API
- **TypeScript** for type safety
- **Vite** for lightning-fast development
- **Pinia** for state management
- **Vue Router 4** for routing
- **Tailwind CSS** for utility-first styling
- **Auto-imports** for Vue, Pinia, and Router APIs
- **Axios** for HTTP requests with interceptors
- **ESLint & Prettier** for code quality
- **Socket.io** client integration

## Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18+ recommended)
- [Yarn](https://yarnpkg.com/) or [npm](https://www.npmjs.com/)

### Installation

```sh
yarn install
# or
npm install
```

### Development

```sh
yarn dev
# or
npm run dev
```

### Build

```sh
yarn build
# or
npm run build
```

### Preview Production Build

```sh
yarn preview
# or
npm run preview
```

## Project Structure

```plaintext
src/
├── assets/       # Images, fonts, etc.
├── components/   # Vue components
├── composables/  # Reusable composition functions
├── enums/        # TypeScript enums
├── layouts/      # App layouts (default, etc.)
├── pages/        # File-based routing pages
├── plugins/      # App/plugin setup (Pinia, Dayjs, etc.)
├── router/       # Vue Router setup
├── scss/         # SCSS and Tailwind CSS imports
├── services/     # API and business logic
├── stores/       # Pinia stores
├── types/        # TypeScript types
└── utils/        # Utility functions
```

## Notable Plugins & Config

- **vite-plugin-pages**: File-based routing from `src/pages`
- **vite-plugin-vue-layouts**: Layout system from `src/layouts`
- **unplugin-auto-import**: Auto-imports for Vue, Pinia, Router APIs
- **@tailwindcss/vite**: Tailwind CSS integration
- **rollup-plugin-visualizer**: Bundle analysis

## Scripts

- `dev`: Start development server
- `build`: Type-check and build for production
- `preview`: Preview the production build

## Environment Variables

- Configure API endpoints and secrets in `.env`
- Example: `VITE_API_ENDPOINT`, `VITE_HMAC_SECRET`, etc.

## Linting & Formatting

- ESLint and Prettier are pre-configured
- Run linting via your IDE or add scripts as needed
