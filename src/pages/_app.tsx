import { ReactNode } from 'react';
import type { AppProps } from 'next/app';

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
    </>
  );
}
