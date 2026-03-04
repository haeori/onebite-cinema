import Head from 'next/head';

import { MovieDetail } from '@/components/movie/movie-detail';

import { GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import { useRouter } from 'next/router';

import { fetchMovieDetail, fetchMovieList } from '@/pages/api/movie';
import { MovieInfo } from '@/types/movie-types';

export const getStaticPaths = async () => {
  // 모든 영화 ID를 가져와 동적 paths 생성
  const movies = await fetchMovieList();

  const paths = movies.map((movie: MovieInfo) => ({
    params: { id: String(movie.id) },
  }));

  return {
    paths,
    fallback: false,
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
const MoviePage = ({ movie }: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <>
        <Head>
          <title>한입시네마</title>
          <meta property="og:image" content="/thumbnail.png" />
          <meta property="og:title" content="한입시네마" />
          <meta property="og:description" content="한입시네마에서 다채로운 영화들을 만나보세요" />
        </Head>
      </>
    );
  }

  return <MovieDetail movie={movie} />;
};

export default MoviePage;
