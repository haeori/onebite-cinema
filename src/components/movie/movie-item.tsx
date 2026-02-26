import { MovieInfo } from '@/types/movie-types';
import style from '@/styles/movie.module.css';

type MovieItemProps = {
  movie: MovieInfo;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  return <img className={style.moviePoster} src={movie.posterImgUrl} alt={movie.title} onClick={() => {}} />;
};
