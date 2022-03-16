import Thumbnail from 'components/Thumbnail';
import { AppCtx } from 'context';
import { NextPage } from 'next';
import { useContext } from 'react';

const WatchlistPage: NextPage = (): JSX.Element => {
  const { userData } = useContext(AppCtx);

  return (
    <div className="relative flex flex-col items-center w-full min-w-0 min-h-screen mx-auto">
      <div className="my-6">
        <h2 className="text-xl border-b border-neutral-600">In Progress</h2>
        <div className="grid grid-cols-2 mx-auto mt-6 justify-items-center md:grid-cols-4 lg:grid-cols-5 gap-y-1 gap-x-1 md:gap-y-2 md:gap-x-2">
          {userData.watchlist.map((movie) => (
            <Thumbnail key={movie.movie_id} id={movie.movie_id} />
          ))}
        </div>
      </div>
      <div className="">
        <h2 className="mb-2 text-xl border-b border-neutral-600">Completed</h2>
      </div>
    </div>
  );
};

export default WatchlistPage;
