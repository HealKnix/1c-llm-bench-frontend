import { HeroUIProvider } from '@heroui/system';
import { QueryClient, QueryClientProvider } from 'react-query';
import type { NavigateOptions } from 'react-router-dom';
import { useHref, useNavigate } from 'react-router-dom';

declare module '@react-types/shared' {
  interface RouterConfig {
    routerOptions: NavigateOptions;
  }
}

// Создаем экземпляр QueryClient
const queryClient = new QueryClient();

export function Provider({ children }: { children: React.ReactNode }) {
  const navigate = useNavigate();

  return (
    <QueryClientProvider client={queryClient}>
      <HeroUIProvider navigate={navigate} useHref={useHref}>
        {children}
      </HeroUIProvider>
    </QueryClientProvider>
  );
}
