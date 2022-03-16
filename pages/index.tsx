import Pagination from 'components/Pagination';
import Results from 'components/Results';
import { useMovies } from 'hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const HomePage: NextPage = (): JSX.Element => {
  const router = useRouter();
  const { data, isLoading } = useMovies('/discover/movie', {
    with_genres: router.query.genres,
  });

  if (isLoading) return <div></div>;

  return (
    <div className="flex justify-center w-full mt-6">
      <div className="relative flex flex-col items-center h-full min-w-0">
        <Results
          results={data.results}
          classes="grid grid-cols-2 mx-auto justify-items-center md:grid-cols-4 xl:grid-cols-5 gap-y-1 gap-x-1 md:gap-y-2 md:gap-x-2"
        />
        <Pagination
          url="/now-playing"
          currentPage={data.page}
          totalPages={data.total_pages}
          totalResults={data.total_results}
        />
      </div>
      <div className="hidden ml-4 lg:block bg-neutral-900">
        {/* <Genres selected={(router.query.genres as string)?.split(',')} /> */}
      </div>
    </div>
  );
};

export default HomePage;
