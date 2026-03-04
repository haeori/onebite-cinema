import { ReactNode } from 'react';
import Link from 'next/link';

import style from '@/styles/global-layout.module.css';

type GlobalLayoutProps = {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <Link href="/">
      <div className={style.container}>
        <div className={style.siteTitle}>ONEBITE CINEMA</div>
        <div className={style.content}>{children}</div>
      </div>
    </Link>
  );
};
