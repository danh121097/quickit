'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

interface QueryClientProviderProps {
  children: React.ReactNode;
}

export function AppQueryClientProvider({ children }: QueryClientProviderProps) {
  let queryClient: QueryClient | undefined = undefined;

  function getQueryClient() {
    if (!queryClient) {
      queryClient = new QueryClient({
        defaultOptions: {
          queries: {
            retry: false,
            retryOnMount: false,
            refetchOnWindowFocus: false,
          },
        },
      });
    }
    return queryClient;
  }
  return (
    <QueryClientProvider client={getQueryClient()}>
      {children}
    </QueryClientProvider>
  );
}
