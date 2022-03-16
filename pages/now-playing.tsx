import Pagination from 'components/Pagination';
import Results from 'components/Results';
import { useMovies } from 'hooks';
import { NextPage } from 'next';
import { useRouter } from 'next/router';

const NowPlayingPage: NextPage = (): JSX.Element => {
  const router = useRouter();
  const { data, isLoading } = useMovies('/movie/now_playing', router.query);

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
      {/* <div className="hidden ml-4 lg:block bg-neutral-900">
        <Auth />
      </div> */}
    </div>
  );
};

export default NowPlayingPage;
