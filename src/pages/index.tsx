import { SearchbarLayout } from '@/components/layouts/searchbar-layout';
import { CinemaHome } from '@/components/cinema-home';
import { ReactNode } from 'react';

export default function HomePage() {
  return <CinemaHome />;
}

HomePage.getLayout = (page: ReactNode) => {
  return <SearchbarLayout>{page}</SearchbarLayout>;
};
