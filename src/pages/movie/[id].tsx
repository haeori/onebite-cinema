import { MovieDetail } from '@/components/movie/movie-detail';

import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

import { fetchMovieDetail, fetchMovieList } from '@/pages/api/movie';
import { MovieInfo } from '@/types/movie-types';

export const getStaticPaths = async () => {
  // 모든 영화 ID를 가져와 동적 paths 생성
  const movies = await fetchMovieList();

  const paths = movies.map((movie : MovieInfo) => ({
    params: { id: String(movie.id) }
  }));

  return {
    paths,
    fallback: true,
  };
};

export const getStaticProps = async (context: GetStaticPropsContext) => {
  const id = context.params?.id as string;

  const movie = await fetchMovieDetail(id);

  if (!movie) return { notFound: true };

  return {
    props: {
      movie,
    },
    revalidate: 86400,
  };
};

// 영화 상세 페이지
const MoviePage = ({ movie } : InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    // TODO 로딩 컴포넌트 적용
    return <div>로딩 중입니다...</div>;
  }

  return <MovieDetail movie={movie} />;
};

export default MoviePage;
