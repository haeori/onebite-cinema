import movieData from '@/mock/dummy.json';
import { MovieItem } from '@/components/movie/movie-item';
import { SearchbarLayout } from '@/components/layouts/searchbar-layout';
import { ReactNode } from 'react';

const SearchPage = () => {
  return (
    <>
      <div>검색 결과</div>
      <div>
        {movieData.map(movie => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </>
  );
};

SearchPage.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};

export default SearchPage;
