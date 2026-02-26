import { SearchbarLayout } from '@/components/layouts/searchbar-layout';
import { CinemaHome } from '@/components/cinema-home';

export default function HomePage() {
  return (
    <SearchbarLayout>
      <CinemaHome />
    </SearchbarLayout>
  );
}
