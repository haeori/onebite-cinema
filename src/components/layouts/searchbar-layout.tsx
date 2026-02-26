import { ReactNode, useState } from 'react';
import style from '@/styles/searchbar-layout.module.css';
import { useRouter } from 'next/router';

type SearchbarLayoutProps = {
  children: ReactNode;
};

export const SearchbarLayout = ({ children }: SearchbarLayoutProps) => {
  const [searchWord, setSearchWord] = useState('');
  const router = useRouter();

  const { q } = router.query;

  const handleSearch = () => {
    if (!searchWord || q === searchWord) return; // 검색어가 없거나 현재와 동일한 경우 페이지 미이동
    router.push(`/search?q=${searchWord}`);
  };

  return (
    <>
      <div className={style.searchbarContainer}>
        <input type="text" value={searchWord} onChange={e => setSearchWord(e.target.value)} onKeyDown={e => e.key === 'Enter' && handleSearch()} placeholder="검색어를 입력하세요" />
        <button onClick={handleSearch}>검색</button>
      </div>
      {children}
    </>
  );
};
