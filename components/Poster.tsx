import { useMovies } from 'hooks';
import Image from 'next/image';
import React from 'react';
import { formatRuntime, parseCertification } from 'utils';

const BASE_URL: string = 'https://image.tmdb.org/t/p/w300';

interface Props {
  movie: any;
  classes: string;
}

const Poster: React.FC<Props> = ({ movie, classes }): JSX.Element => {
  const { data: certification, isLoading } = useMovies(
    `/movie/${movie.id}/release_dates`,
  );

  if (isLoading) return <div></div>;

  return (
    <div className={`relative transform ${classes}`}>
      <Image
        className="duration-300 ease-out"
        layout="fill"
        objectFit="cover"
        src={
          movie.poster_path
            ? `${BASE_URL}${movie.poster_path}`
            : '/movie_placeholder.png'
        }
        alt={''}
        placeholder="blur"
        blurDataURL="/movie_placeholder.png"
      />

      <div className="absolute bottom-0 right-0 p-1 m-1 text-xs bg-neutral-900">
        {movie.runtime ? `${formatRuntime(movie.runtime)} | ` : ''}
        <span className="font-bold">{parseCertification(certification)}</span>
      </div>
    </div>
  );
};

export default Poster;
