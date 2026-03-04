import { ReactNode } from 'react';
import { GetServerSideProps, InferGetServerSidePropsType } from 'next';

import { SearchbarLayout } from '@/components/layouts/searchbar-layout';

import { CinemaHome } from '@/components/cinema-home';
import { fetchMovieList, fetchRandomMovies } from '@/pages/api/movie';

export const getServerSideProps: GetServerSideProps = async () => {
  const movies = await fetchMovieList();
  const recommendMovies = await fetchRandomMovies();

  return {
    props: {
      movies,
      recommendMovies
    },
  }
};

export default function HomePage({movies, recommendMovies}: InferGetServerSidePropsType<typeof getServerSideProps>) {
  return <CinemaHome movies={movies} recommendMovies={recommendMovies} />;
}

HomePage.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
