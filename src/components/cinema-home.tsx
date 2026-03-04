import Head from 'next/head';

import style from '@/styles/cinema-home.module.css';

import { MovieInfo } from '@/types/movie-types';

import { MovieItem } from '@/components/movie/movie-item';

interface CinemaHomeProps {
  movies: MovieInfo[];
  recommendMovies: MovieInfo[];
}

export const CinemaHome = ({ movies, recommendMovies }: CinemaHomeProps) => {
  return (
    <>
      <Head>
        <title>한입시네마</title>
        <meta property="og:image" content="/thumbnail.png" />
        <meta property="og:title" content="한입시네마" />
        <meta property="og:description" content="한입시네마에서 다채로운 영화들을 만나보세요" />
      </Head>
      <section className={style.movieSection}>
        <h3 className={style.sectionTitle}>추천 영화</h3>
        <div className={style.recommendMovieGrid}>
          {recommendMovies?.map((movie: MovieInfo) => (
            <MovieItem key={`recommend-movie-${movie.id}`} movie={movie} />
          ))}
        </div>
      </section>

      <section className={style.movieSection}>
        <h3 className={style.sectionTitle}>모든 영화</h3>
        <div className={style.allMovieGrid}>
          {movies?.map((movie: MovieInfo) => (
            <MovieItem key={`all-movie-${movie.id}`} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};
