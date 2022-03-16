import {
  InformationCircleIcon,
  PlusIcon,
  XIcon,
} from '@heroicons/react/outline';
import {
  addToWatchlist,
  getWatchlist,
  removeFromWatchlist,
} from 'api/services/Watchlist';
import { AppCtx } from 'context';
import { useMovies } from 'hooks';
import Link from 'next/link';
import React, { useContext, useState } from 'react';
import toast from 'react-hot-toast';
import { formatDate } from 'utils';
import Poster from './Poster';

interface Props {
  id: string;
}

const Thumbnail: React.FC<Props> = ({ id }): JSX.Element => {
  const { data: movie, isLoading } = useMovies(`/movie/${id}`);
  const { userData, setUserData } = useContext(AppCtx);
  const [hover, setHover] = useState<boolean>(false);

  const isInWatchlist = (id: string) => {
    return userData.watchlist.some(
      ({ movie_id }) => movie_id.localeCompare(id) === 0,
    );
  };

  const handleAddWatchlist = async (status: string) => {
    if (userData.session) {
      await addToWatchlist(movie.id, status);
      const watchlist = await getWatchlist();
      setUserData({ ...userData, watchlist });
    } else toast.error('Please login.');
  };

  const handleRemoveWatchlist = async () => {
    const movie = userData.watchlist.find(
      ({ movie_id: key }) => key.toString().localeCompare(id) === 0,
    );

    if (movie) {
      await removeFromWatchlist(movie.movie_id);
      const watchlist = await getWatchlist();
      setUserData({ ...userData, watchlist });
    }
  };

  if (isLoading) return <div></div>;

  return (
    <div
      className="w-[150px] bg-neutral-900 cursor-pointer hover:bg-neutral-700 transition duration-100 ease-in-out hover:scale-95"
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
    >
      <Poster movie={movie} classes="w-[150px] h-[225px]" />
      <div className="px-2 pb-2">
        <p className="mt-2 text-sm font-bold truncate">{movie.title}</p>
        <p className="mb-1 text-xs">{formatDate(movie.release_date)}</p>
      </div>

      <div className="bg-neutral-800">
        <div className={`flex items-center ${hover ? '' : 'invisible'}`}>
          {isInWatchlist(movie.id) ? (
            <button
              className="flex justify-center w-full py-1 bg-red-600 hover:bg-red-400"
              onClick={handleRemoveWatchlist}
            >
              <XIcon className="w-5 h-5" />
            </button>
          ) : (
            <button
              className="flex justify-center w-full py-1 bg-green-600 hover:bg-green-400"
              onClick={() => handleAddWatchlist('in progress')}
            >
              <PlusIcon className="w-5 h-5" />
            </button>
          )}
          <Link href={`/movie/${id}`}>
            <a className="w-full">
              <button className="flex justify-center w-full py-1 bg-sky-600 hover:bg-sky-400">
                <InformationCircleIcon className="w-5 h-5" />
              </button>
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Thumbnail;
