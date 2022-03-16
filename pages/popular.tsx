import Pagination from 'components/Pagination';
import Results from 'components/Results';
import { useMovies } from 'hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const PopularPage: NextPage = (): JSX.Element => {
  const router = useRouter();
  const { data, isLoading } = useMovies('/movie/popular', router.query);
  if (isLoading) return <div></div>;

  return (
    <div className="relative flex flex-col items-center w-full h-full min-w-0 mx-auto">
      <Results
        results={data.results}
        classes="grid grid-cols-2 mx-auto mt-6 justify-items-center md:grid-cols-4 lg:grid-cols-5 gap-y-1 gap-x-1 md:gap-y-2 md:gap-x-2"
      />
      <Pagination
        url="/popular"
        currentPage={data.page}
        totalPages={data.total_pages}
        totalResults={data.total_results}
      />
    </div>
  );
};

export default PopularPage;
