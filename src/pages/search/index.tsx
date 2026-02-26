import movieData from '@/mock/dummy.json';
import { MovieItem } from '@/components/movie/movie-item';
import { SearchbarLayout } from '@/components/layouts/searchbar-layout';
import { ReactNode } from 'react';
import style from '@/styles/search.module.css';

const SearchPage = () => {
  return (
    <div className={style.searchContainer}>
      <h3 className={style.searchTitle}>검색 결과</h3>
      <div className={style.movieGrid}>
        {movieData.map(movie => (
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
