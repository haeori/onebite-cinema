import '@/styles/globals.css';
import type { AppProps } from 'next/app';
import { GlobalLayout } from '@/components/layouts/global-layout';
import { ReactNode } from 'react';

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
