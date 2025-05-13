# VueJS + Quasar + Pinia + Micro-Route Template

A modern VueJS project template featuring [Quasar Framework](https://quasar.dev/), [Pinia](https://pinia.vuejs.org/), [Vue Micro-Route](https://www.npmjs.com/package/vue-micro-route), [Tailwind CSS](https://tailwindcss.com/), and more. This template is designed for rapid development of scalable, beautiful VueJS applications with advanced routing capabilities.

## Features

- **VueJS** with Composition API
- **TypeScript** for type safety
- **Quasar** UI framework
- **Pinia** for state management
- **Vue Micro-Route** for advanced page/dialog routing
- **Tailwind CSS** utility-first styling
- **Auto-import** for Vue, Vue Router, Pinia, and Micro-Route
- **i18n** internationalization
- **Axios** for HTTP requests with interceptors
- **ESLint & Prettier** for code quality
- **Socket.io** client integration
- **GSAP** animations

## Project Structure

```plaintext
src/
├── App.vue             # Root Vue component
├── @core/              # Global components and layouts
│   └── layouts/        # Core layout components for micro-routing
├── assets/             # Static assets (images, fonts, etc.)
├── boot/               # Boot files (axios, i18n)
├── components/         # Shared Vue components
├── composables/        # Vue 3 Composition API utilities
├── css/                # SCSS stylesheets with Tailwind
├── helpers/            # Helper functions and constants
├── i18n/               # Internationalization resources
├── layouts/            # Layout components
├── microRouter/        # Micro-route configuration
├── pages/              # Page components for standard Vue Router
├── repositories/       # API service layers
├── router/             # Vue Router configuration
├── routerDialogs/      # Dialog components for micro-routing
├── routerPages/        # Page components for micro-routing
├── stores/             # Pinia state management
└── types/              # TypeScript type definitions
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

## Micro-Route Architecture

This project uses the Vue Micro-Route architecture for enhanced navigation control:

- **Page Management**: Routes are configured in `src/microRouter/index.ts`
- **Dialog Management**: Dialogs are defined in `src/microRouter/index.ts`
- **Page Components**: Located in `src/routerPages/`
- **Dialog Components**: Located in `src/routerDialogs/`

### Usage Example

```typescript
// Navigate to a page
const { push } = useMicroRoute();
push('pageName');

// Open a dialog
const { openDialog } = useMicroRoute();
openDialog('dialogName');

// Close a dialog
const { closeDialog } = useMicroRoute();
closeDialog('dialogName');
```

## Useful Links

- [Quasar Framework Documentation](https://quasar.dev/)
- [Vue.js 3 Documentation](https://vuejs.org/)
- [Pinia Documentation](https://pinia.vuejs.org/)
- [Vue Router Documentation](https://router.vuejs.org/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [Vue Micro-Route Documentation](https://www.npmjs.com/package/vue-micro-route)

## TypeScript & Auto-imports

The project is configured with TypeScript and uses auto-imports for Vue, Vue Router, Pinia, and Quasar components, making development faster and cleaner.

---

This template is part of the [quickit](https://github.com/danh121097/quickit) project for rapid project bootstrapping.
