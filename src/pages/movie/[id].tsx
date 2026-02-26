import { MovieDetail } from '@/components/movie/movie-detail';

const dummyMovie = {
  id: 13,
  title: '케이팝 데몬 헌터스',
  releaseDate: '2025-06-20',
  company: '넷플릭스',
  genres: ['가족', '코미디'],
  subTitle: '케이팝 슈퍼스타 루미, 미라, 조이!',
  description: '케이팝 슈퍼스타 루미, 미라, 조이. 매진을 기록하는 대형 스타디움 공연이 없을 때면 이들은 또 다른 활동에 나선다. 바로 비밀 능력을 이용해 팬들을 초자연적 위협으로부터 보호하는 것.',
  runtime: 99,
  posterImgUrl: 'https://search.pstatic.net/common?quality=85&direct=true&src=https%3A%2F%2Fs.pstatic.net%2Fmovie.phinf%2F20250616_285%2F1750048075685fP0Ky_JPEG%2Fmovie_image.jpg%3Ftype%3Dw640_2',
};

// 영화 상세 페이지
const MoviePage = () => {
  // TODO 추후 실데이터로 변경
  return <MovieDetail movie={dummyMovie} />;
};

export default MoviePage;
