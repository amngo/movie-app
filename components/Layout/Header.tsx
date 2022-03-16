import Link from 'next/link';
import React from 'react';
import Search from '../Search';
import Nav from './Nav';

const Header: React.FC = (): JSX.Element => {
  return (
    <div className="sticky top-0 z-40 flex flex-col justify-center w-full bg-neutral-900/75 backdrop-blur-lg">
      <div className="container flex items-center self-center justify-between w-full px-4 py-2 lg:px-8">
        <div className="flex items-center w-1/4">
          <Link href={'/'}>
            <a>Movie-App</a>
          </Link>
        </div>
        <Search />
        <div className="flex items-center justify-end w-1/4"></div>
      </div>
      <Nav />
    </div>
  );
};

export default Header;
