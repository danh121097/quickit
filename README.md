# quickit

A CLI tool for rapidly creating modern project templates for VueJS, NuxtJS, ReactJS, NextJS, and more. Designed for developers who want to bootstrap scalable, best-practice projects in seconds.

## Features

- **Multiple Language/Framework Support**: VueJS, NuxtJS, ReactJS, NextJS
- **Interactive CLI**: Guided process for creating new projects
- **Flexible Package Manager**: Use npm or yarn
- **Best Practices**: Pre-configured with TypeScript, linting, formatting, and scalable folder structures
- **Ready-to-Use Templates**: Includes Quasar, Pinia, Tailwind, Micro-Route, Mantine, Zustand, React Query, and more

## Installation

```bash
# Install globally
npm install -g quickit

# Or use with npx (no global install required)
npx quickit
```

## Usage

### Basic Usage

Run the CLI without any arguments for an interactive setup:

```bash
quickit
```

Or use the create command directly:

```bash
quickit create my-app
```

### Command Line Options

```bash
quickit --version   # Show version
quickit --help      # Show help
```

## Available Templates

### vuejs.quasar

- VueJS project with Quasar, Pinia and TypeScript

#### Folder Structure

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

### vuejs.quasar.micro-route

- VueJS project with Micro-route Architecture, Quasar, Pinia and TypeScript

#### Folder Structure

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

### nextjs.mantine

- Next.js project with Mantine UI, Tailwind CSS, Zustand, React Query and TypeScript

#### Folder Structure

```plaintext
src/
├── app/                # Next.js app directory (routing, layout, pages)
├── components/         # Reusable React components
│   └── provider/       # Context and providers (QueryClient, QueryParam)
├── css/                # Global styles (Tailwind, Mantine)
├── enums/              # TypeScript enums
├── hooks/              # Custom React hooks
├── routes/             # Route definitions
├── services/           # API and core service logic
├── stores/             # Zustand state management
├── theme/              # Mantine theme configuration
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
public/                 # Static assets
```

## Development

### Setup for Development

```bash
git clone https://github.com/danh121097/quickit.git
cd quickit
npm install
npm link
```

### Testing Changes

After making changes, test by running:

```bash
quickit create test-app
```
