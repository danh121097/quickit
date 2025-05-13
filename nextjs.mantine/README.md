# Next.js + Mantine Template

A modern [Next.js](https://nextjs.org/) project template featuring [Mantine UI](https://mantine.dev/), [Tailwind CSS](https://tailwindcss.com/), [React Query](https://tanstack.com/query/latest), [Zustand](https://zustand-demo.pmnd.rs/), and more. This template is designed for rapid development of scalable, beautiful React applications.

## Features

- **Next.js 15** with App Router
- **Mantine UI** for fast, accessible, and customizable components
- **Tailwind CSS** utility-first styling
- **React Query** for data fetching and caching
- **Zustand** for state management
- **TypeScript** for type safety
- **Axios** for HTTP requests
- **ESLint & Prettier** for code quality

## Project Structure

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

## Getting Started

### Install dependencies

```bash
npm install
# or
yarn install
```

### Development

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) to view the app.

### Build for Production

```bash
npm run build
npm start
```

### Lint & Format

```bash
npm run lint
# Format with Prettier
yarn prettier --write .
```

## Environment Requirements

- Node.js: >=18
- npm: >= 6.13.4 or yarn: >= 1.21.1

## Useful Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Mantine Documentation](https://mantine.dev/docs/getting-started/)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [React Query Docs](https://tanstack.com/query/latest)
- [Zustand Docs](https://docs.pmnd.rs/zustand/getting-started/introduction)

---

This template is part of the [quickit](https://github.com/danh121097/quickit) project for rapid project bootstrapping.
