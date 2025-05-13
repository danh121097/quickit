# VueJS + Quasar + Pinia Template

A modern VueJS project template featuring [Quasar Framework](https://quasar.dev/), [Pinia](https://pinia.vuejs.org/), [Tailwind CSS](https://tailwindcss.com/), and more. This template is designed for rapid development of scalable, beautiful VueJS applications.

## Features

- **VueJS** with Composition API
- **TypeScript** for type safety
- **Quasar** UI framework
- **Pinia** for state management
- **Vue Router** with history mode
- **Tailwind CSS** utility-first styling
- **Auto-import** for Vue and Quasar components
- **i18n** internationalization
- **Axios** for HTTP requests with interceptors
- **ESLint & Prettier** for code quality
- **Socket.io** client integration

## Project Structure

```plaintext
src/
├── App.vue           # Root Vue component
├── @core/            # Global components and layouts
├── assets/           # Static assets (images, fonts, etc.)
├── boot/             # Boot files (axios, i18n)
├── components/       # Shared Vue components
├── composables/      # Vue 3 Composition API utilities
├── css/              # SCSS stylesheets with Tailwind
├── helpers/          # Helper functions and constants
├── i18n/             # Internationalization resources
├── layouts/          # Layout components
├── pages/            # Page components
├── repositories/     # API service layers
├── router/           # Vue Router configuration
├── stores/           # Pinia state management
└── types/            # TypeScript type definitions
```

## Getting Started

### Install dependencies

```bash
yarn install
# or
npm install
```

### Development

```bash
quasar dev
```

### Lint & Format

```bash
yarn lint
# or
npm run lint

yarn format
# or
npm run format
```

### Build for Production

```bash
quasar build
```

### Customize the configuration

See [Configuring quasar.config.js](https://v2.quasar.dev/quasar-cli-vite/quasar-config-js).

## Environment Requirements

- Node.js: ^18 || ^20 || ^22 || ^24 || ^26 || ^28
- npm: >= 6.13.4
- yarn: >= 1.21.1

## Useful Links

- [Quasar Framework Documentation](https://quasar.dev/)
- [Vue.js 3 Documentation](https://vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

## TypeScript & Auto-imports

The project is configured with TypeScript and uses auto-imports for Vue, Vue Router, Pinia, and Quasar components, making development faster and cleaner.

---

This template is part of the [quickit](https://github.com/danh121097/quickit) project for rapid project bootstrapping.
