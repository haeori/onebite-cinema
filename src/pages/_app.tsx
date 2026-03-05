import { ReactNode } from 'react';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import '@/styles/globals.css';

import { GlobalLayout } from '@/components/layouts/global-layout';

type LayoutProps = {
  getLayout?: (page: ReactNode) => ReactNode;
};

/**
 * Root Next.js App component that applies an optional per-page layout and global layout, and renders a top progress bar.
 *
 * @param Component - The active page component; may include an optional `getLayout` function to wrap the page in a custom layout.
 * @param pageProps - Props to be passed to the active page component.
 * @returns The application React element tree containing the page wrapped by its layout and the global progress bar.
 */
export default function App({ Component, pageProps }: AppProps & { Component: LayoutProps }) {
  const getLayout = Component.getLayout || (page => page);
  return (
    <>
      <GlobalLayout>{getLayout(<Component {...pageProps} />)}</GlobalLayout>
      <NextNProgress color="#6b1fa8" height={4} options={{ showSpinner: false }} />
    </>
  );
}
