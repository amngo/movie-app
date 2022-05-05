import { useMovies } from "hooks";
import Image from "next/image";
import React from "react";

const BASE_URL: string = "https://image.tmdb.org/t/p/w185";

interface Props {
  id: string;
}

function Cast({ id }: Props) {
  const { data, isLoading } = useMovies(`/movie/${id}/credits`);
  if (isLoading) return <div />;

  const cast = data?.cast.map((person) => {
    return (
      <div key={person.id} className="flex items-center w-[200px] m-auto">
        <div>
          <div className="relative w-12 h-12">
            <Image
              className="rounded-full"
              layout="fill"
              objectFit="cover"
              src={
                person.profile_path
                  ? `${BASE_URL}${person.profile_path}`
                  : "https://upload.wikimedia.org/wikipedia/commons/7/7c/Profile_avatar_placeholder_large.png"
              }
              alt={person.name}
            />
          </div>
        </div>

        <div className="flex flex-col w-full ml-4">
          <p className="text-sm">{person.name}</p>
          <p className="text-xs">{person.character}</p>
        </div>
      </div>
    );
  });

  return (
    <div className="w-full my-8">
      <h1 className="w-full pb-1 mb-4 text-xl border-b border-neutral">
        Cast ({cast.length})
      </h1>

      <div className="grid w-full gap-y-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 h-[275px] overflow-y-auto overflow-x-hidden">
        {cast}
      </div>
    </div>
  );
}

export default Cast;
