import Head from 'next/head';

import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import style from '@/styles/search.module.css';

import { fetchSearchMovies } from '@/pages/api/movie';

import { SearchbarLayout } from '@/components/layouts/searchbar-layout';
import { MovieItem } from '@/components/movie/movie-item';
import { Loading } from '@/components/common/loading';
import { MovieInfo } from '@/types/movie-types';
import { isArrayEmpty, isArrayNotEmpty, isStringNotEmpty } from '@/utils/movie-utils';

const SearchPage = () => {
  const router = useRouter();
  const query = router.query.q as string;

  const [searchedMovies, setSearchedMovies] = useState<MovieInfo[]>([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchSearchData = async () => {
    setIsLoading(true);
    const data = await fetchSearchMovies(query);
    setSearchedMovies(data);
    setIsLoading(false);
  };

  useEffect(() => {
    if (query) {
      fetchSearchData();
    }
  }, [query]);

  return (
    <>
      <Head>
        <title>한입시네마 - 검색결과</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입시네마 - 검색결과" />
        <meta property="og:description" content="한입시네마에서 다채로운 영화들을 만나보세요" />
      </Head>
      <div className={style.searchContainer}>
        <h3 className={style.searchTitle}>검색 결과</h3>

        {isLoading ? (
          <Loading />
        ) : (
          <>
            <div className={style.movieGrid}>{isArrayNotEmpty(searchedMovies) && searchedMovies.map(movie => <MovieItem key={movie.id} movie={movie} />)}</div>

            {isStringNotEmpty(query) && isArrayEmpty(searchedMovies) && <div className={style.noResult}>검색 결과가 없습니다</div>}
          </>
        )}
      </div>
    </>
  );
};

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};

export default SearchPage;
