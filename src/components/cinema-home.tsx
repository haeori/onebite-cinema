import style from '@/styles/cinema-home.module.css';
import movieData from '@/mock/dummy.json';
import { MovieInfo } from '@/types/movie-types';
import { MovieItem } from '@/components/movie/movie-item';

export const CinemaHome = () => {
  return (
    <>
      <section className={style.movieSection}>
        <h3 className={style.sectionTitle}>추천 영화</h3>
        <div>
          {/* TODO 추후 실데이터 페칭 예정 */}
          {movieData
            .filter(filteredMovie => filteredMovie.id < 4)
            .map((movie: MovieInfo) => (
              <MovieItem key={`recommend-movie-${movie.id}`} movie={movie} />
            ))}
        </div>
      </section>

      <section className={style.movieSection}>
        <h3 className={style.sectionTitle}>모든 영화</h3>
        <div>
          {/* TODO 추후 실데이터 페칭 예정 */}
          {movieData.map((movie: MovieInfo) => (
            <MovieItem key={`all-movie-${movie.id}`} movie={movie} />
          ))}
        </div>
      </section>
    </>
  );
};
