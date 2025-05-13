import type { Metadata } from 'next';
import {
  ColorSchemeScript,
  mantineHtmlProps,
  MantineProvider,
} from '@mantine/core';
import { ModalsProvider } from '@mantine/modals';
import { Suspense } from 'react';
import theme from '@/theme';
import '@/css/globals.css';
import { AppQueryClientProvider, AppQueryParamProvider } from '@/components';

export const metadata: Metadata = {
  title: 'Next.js + Mantine Template',
  description:
    'A modern Next.js project template featuring[Mantine UI, Tailwind CSS, React Query, Zustand, and more. This template is designed for rapid development of scalable, beautiful React applications.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" {...mantineHtmlProps}>
      <head>
        <ColorSchemeScript />
      </head>
      <body className="antialiased">
        <Suspense>
          <AppQueryClientProvider>
            <AppQueryParamProvider>
              <MantineProvider theme={theme} defaultColorScheme="light">
                <ModalsProvider>{children}</ModalsProvider>
              </MantineProvider>
            </AppQueryParamProvider>
          </AppQueryClientProvider>
        </Suspense>
      </body>
    </html>
  );
}
