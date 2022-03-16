import { SearchIcon } from '@heroicons/react/outline';
import { NextRouter, useRouter } from 'next/router';
import React, { useState } from 'react';

const Search: React.FC = (): JSX.Element => {
  const [query, setQuery] = useState<string>('');
  const router: NextRouter = useRouter();

  const handleSubmit = (event: React.SyntheticEvent): void => {
    event.preventDefault();
    router.push({ pathname: '/search', query: { query } });
  };

  return (
    <form onSubmit={handleSubmit} className='relative w-2/4 max-w-[600px]'>
      <input
        spellCheck='false'
        type='text'
        className='w-full pl-4 pr-12 text-sm border-0 border-transparent rounded-md focus:border-transparent focus:ring-0 bg-neutral-800'
        placeholder='Search'
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <SearchIcon className='absolute w-5 h-5 transform -translate-y-1/2 top-1/2 right-4' />
    </form>
  );
};

export default Search;
