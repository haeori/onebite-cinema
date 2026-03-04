import { MovieDetail } from '@/components/movie/movie-detail';

import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

import { fetchMovieDetail } from '@/pages/api/movie';

export const getStaticPaths = async () => {
  return {
    paths: [{ params: { id: '1' }}, {params: { id: '2'}}],
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
