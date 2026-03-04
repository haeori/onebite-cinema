import Link from 'next/link';
import { GlobalLayout } from '@/components/layouts/global-layout';
import style from '@/styles/notfound.module.css';

const NotFound = () => (
  <GlobalLayout>
    <div className={style.container}>
      <div className={style.icon}>🎬</div>
      <h1 className={style.title}>페이지를 찾을 수 없습니다</h1>
      <p className={style.description}>
        요청하신 페이지가 존재하지 않거나 삭제되었습니다.
      </p>
      <Link href="/" className={style.button}>
        홈으로 돌아가기
      </Link>
    </div>
  </GlobalLayout>
);

export default NotFound;
