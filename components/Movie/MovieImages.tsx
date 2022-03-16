import { useMovieImages } from 'hooks';
import Image from 'next/image';
import React from 'react';

const BASE_URL: string = 'https://image.tmdb.org/t/p/w300';

interface Props {
  id: string;
}

const MovieImages: React.FC<Props> = ({ id }): JSX.Element => {
  const { data, isLoading } = useMovieImages(id);
  console.log(data);

  const images = data?.backdrops.map((image) => {
    return (
      <div key={image.file_path} className='w-[320px] h-[180px] relative'>
        <Image
          layout='fill'
          objectFit='contain'
          src={`${BASE_URL}${image.file_path}`}
          alt=''
        />
      </div>
    );
  });

  return !isLoading ? (
    <div className='grid w-full grid-cols-5'>{images.slice(0, 5)}</div>
  ) : (
    <div></div>
  );
};

export default MovieImages;
