import { ReactNode, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import style from '@/styles/search.module.css';

import { fetchSearchMovies } from '@/pages/api/movie';

import { SearchbarLayout } from '@/components/layouts/searchbar-layout';
import { MovieItem } from '@/components/movie/movie-item';
import { MovieInfo } from '@/types/movie-types';

const SearchPage = () => {
  const router = useRouter();
  const  q  = router.query.q as string;

  const [searchedMovies, setSearchedMovies] = useState<MovieInfo[]>([]);

  const fetchSearchData = async () => {
    const data = await fetchSearchMovies(q)
    setSearchedMovies(data)
  }

  useEffect(() => {
    if (q) {
      fetchSearchData()
    }
  }, [q])

  return (
    <div className={style.searchContainer}>
      <h3 className={style.searchTitle}>검색 결과</h3>
      <div className={style.movieGrid}>
        {searchedMovies?.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};

export default SearchPage;
