import { useMovies } from "hooks";
import Link from "next/link";
import React from "react";
import { formatDate } from "utils";
import Poster from "./Poster";

interface Props {
  id: string;
}

function Thumbnail({ id }: Props) {
  const { data: movie, isLoading } = useMovies(`/movie/${id}`);
  if (isLoading) return <div />;

  return (
    <div className="w-[150px] bg-neutral cursor-pointer hover:bg-neutral/50 transition duration-100 ease-in-out hover:scale-95">
      <Link href={`/movie/${id}`} passHref>
        <a href="replace">
          <Poster movie={movie} classes="w-[150px] h-[225px]" />
          <div className="px-2 pb-2">
            <p className="mt-2 text-sm font-bold truncate">{movie.title}</p>
            <p className="mb-1 text-xs">{formatDate(movie.release_date)}</p>
          </div>
        </a>
      </Link>
    </div>
  );
}

export default Thumbnail;
