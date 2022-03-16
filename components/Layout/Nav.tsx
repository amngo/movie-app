import Link from 'next/link';
import { NextRouter, useRouter } from 'next/router';
import React from 'react';

const activePage = (pathname) => {
  switch (pathname) {
    case '/':
      return 'Now Playing';
    case '/popular':
      return 'Popular';
    case '/top-rated':
      return 'Top Rated';
    case '/upcoming':
      return 'Upcoming';
    case '/favorites':
      return 'Favorites';
    default:
      return '';
  }
};

const Nav: React.FC = (): JSX.Element => {
  const router: NextRouter = useRouter();

  return (
    <div className="flex items-center w-full lg:justify-center bg-neutral-900">
      <div className="max-w-[1700px] text-xs lg:flex lg:flex-row items-center justify-center flex w-full">
        <Link href="/now-playing">
          <a
            className={`px-3 py-2 text-center hover:bg-neutral-800 ${
              router.pathname === '/now-playing' ? 'bg-neutral-800' : ''
            }`}
          >
            Now Playing
          </a>
        </Link>
        <Link href="/popular">
          <a
            className={`px-3 py-2 text-center hover:bg-neutral-800 ${
              router.pathname === '/popular' ? 'bg-neutral-800' : ''
            }`}
          >
            Popular
          </a>
        </Link>
        <Link href="/upcoming">
          <a
            className={`px-3 py-2 text-center hover:bg-neutral-800 ${
              router.pathname === '/upcoming' ? 'bg-neutral-800' : ''
            }`}
          >
            Upcoming
          </a>
        </Link>
        <Link href="/watchlist">
          <a
            className={`px-3 py-2 text-center hover:bg-neutral-800 ${
              router.pathname === '/watchlist' ? 'bg-neutral-800' : ''
            }`}
          >
            My Watchlist
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Nav;
