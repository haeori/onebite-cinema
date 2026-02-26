import { MovieInfo } from '@/types/movie-types';
import style from '@/styles/movie-item.module.css';
import { useRouter } from 'next/router';

type MovieItemProps = {
  movie: MovieInfo;
};

export const MovieItem = ({ movie }: MovieItemProps) => {
  const router = useRouter();

  // TODO 추후 실데이터 연결
  return <img className={style.moviePoster} src={movie.posterImgUrl} alt={movie.title} onClick={() => router.push(`/movie/${movie.id}`)} />;
};
