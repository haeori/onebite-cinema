import { ReactNode, useState } from 'react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

import '@/styles/globals.css';

import { GlobalLayout } from '@/components/layouts/global-layout';

type LayoutProps = {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({ Component, pageProps }: AppProps & { Component: LayoutProps }) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: Infinity, // 영화 데이터 특성상 캐싱 시간 별도 설정 불필요
            refetchOnWindowFocus: false,
          },
        },
      }),
  );

  const getLayout = Component.getLayout || (page => page);
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
      <NextNProgress color="#6b1fa8" height={4} options={{ showSpinner: false }} />
    </QueryClientProvider>
  );
}
