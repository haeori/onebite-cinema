import { ReactNode } from 'react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import '@/styles/globals.css';

import { GlobalLayout } from '@/components/layouts/global-layout';

type LayoutProps = {
  getLayout?: (page: ReactNode) => ReactNode;
};

export default function App({ Component, pageProps }: AppProps & { Component: LayoutProps }) {
  const getLayout = Component.getLayout || (page => page);
  return (
    <>
      <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
      <NextNProgress color="#6b1fa8" height={4} options={{ showSpinner: false }} />
    </>
  );
}
