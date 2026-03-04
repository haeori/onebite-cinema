import { ReactNode } from 'react';
import Link from 'next/link';

import style from '@/styles/global-layout.module.css';

type GlobalLayoutProps = {
  children: ReactNode;
};

export const GlobalLayout = ({ children }: GlobalLayoutProps) => {
  return (
    <div className={style.container}>
      <Link href="/">
        <div className={style.siteTitle}>
          <span className={style.logoIcon}>🎬</span>
          <span className={style.logoText}>
            <span className={style.logoBrand}>ONEBITE</span>
            <span className={style.logoSub}>CINEMA</span>
          </span>
        </div>
      </Link>
      <div className={style.content}>{children}</div>
    </div>
  );
};
