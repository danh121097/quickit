# VueJS App with Quasar & Pinia

A modern Vue.js project built with Quasar Framework and Pinia state management.

## Features

- **VueJS** with Composition API
- **TypeScript** for type safety
- **Quasar** UI framework
- **Pinia** for state management
- **Vue Router v4** with history mode
- **Tailwind CSS** integrated
- **Auto-import** for Vue and Quasar components
- **i18n** internationalization
- **Axios** for HTTP requests with interceptors
- **ESLint & Prettier** for code quality
- **SCSS** for styling with custom mixins
- **Socket.io** client integration
- **Dayjs**, **GSAP**, **Lodash**, and **Numeral** utilities

## Project Structure

```plaintext
src/
├── App.vue           # Root Vue component
├── @core             # Global components
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

## Install the dependencies

```bash
yarn
# or
npm install
```

### Start the app in development mode (hot-code reloading, error reporting, etc.)

```bash
quasar dev
```

### Lint the files

```bash
yarn lint
# or
npm run lint
```

### Format the files

```bash
yarn format
# or
npm run format
```

### Build the app for production

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
