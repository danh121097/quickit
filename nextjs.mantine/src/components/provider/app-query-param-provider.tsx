'use client';

import NextAdapterApp from 'next-query-params/app';
import { QueryParamProvider } from 'use-query-params';

interface QueryParamProviderProps {
  children: React.ReactNode;
}

export function AppQueryParamProvider({ children }: QueryParamProviderProps) {
  return (
    <QueryParamProvider adapter={NextAdapterApp}>{children}</QueryParamProvider>
  );
}
