import Link from 'next/link';
import React from 'react';

interface Props {
  url: string;
  query?: string;
  currentPage: number;
  totalPages: number;
  totalResults: number;
}

const Pagination: React.FC<Props> = ({
  url,
  query,
  currentPage,
  totalPages,
  totalResults,
}): JSX.Element => {
  return (
    <div className="flex flex-col items-center justify-between w-full mt-6 md:flex-row md:px-12">
      <div className="text-sm">
        Showing{' '}
        <span className="font-bold">
          {totalResults > 0 ? (currentPage - 1) * 20 + 1 : 0}
        </span>{' '}
        to{' '}
        <span className="font-bold">
          {totalResults < currentPage * 20 ? totalResults : currentPage * 20}
        </span>{' '}
        of <span className="font-bold">{totalResults}</span> results
      </div>
      <div className="mt-2 md:mt-0">
        <Link
          href={`${url}?${query ? `query=${query}&` : ''}page=${
            currentPage - 1
          }`}
        >
          <a>
            <button
              className={`px-6 py-2 mr-2 text-sm rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-sky-500 ${
                currentPage === 1 ? 'invisible' : ''
              }`}
              disabled={currentPage === 1}
            >
              Prev
            </button>
          </a>
        </Link>

        <Link
          href={`${url}?${query ? `query=${query}&` : ''}page=${
            currentPage + 1
          }`}
        >
          <a>
            <button
              className={`px-6 py-2 text-sm rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 hover:bg-sky-500 ${
                currentPage === totalPages ? 'invisible' : ''
              }`}
              disabled={currentPage === totalPages}
            >
              Next
            </button>
          </a>
        </Link>
      </div>
    </div>
  );
};

export default Pagination;
