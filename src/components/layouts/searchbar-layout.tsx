import { ReactNode, useState } from 'react';
import style from '@/styles/searchbar-layout.module.css';

type SearchbarLayoutProps = {
  children: ReactNode;
};

export const SearchbarLayout = ({ children }: SearchbarLayoutProps) => {
  const [searchWord, setSearchWord] = useState('');

  const handleSearch = () => {};

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
