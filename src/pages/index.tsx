import { ReactNode } from 'react';
import { GetStaticProps, InferGetStaticPropsType } from 'next';

import { SearchbarLayout } from '@/components/layouts/searchbar-layout';

import { CinemaHome } from '@/components/cinema-home';
import { fetchMovieList, fetchRandomMovies } from '@/pages/api/movie';

export const getStaticProps: GetStaticProps = async () => {
  const [movies, recommendMovies] = await Promise.all([fetchMovieList(), fetchRandomMovies()]);

  return {
    props: {
      movies,
      recommendMovies,
    },
    revalidate: 3, // 3초마다 추천영화 재생성
  };
};

export default function HomePage({ movies, recommendMovies }: InferGetStaticPropsType<typeof getStaticProps>) {
  return <CinemaHome movies={movies} recommendMovies={recommendMovies} />;
}

HomePage.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
