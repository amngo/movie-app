import { MovieDetails, Production } from "models";
import React from "react";
import { formatDate } from "utils";

interface Props {
  movie: MovieDetails;
}

function Info({ movie }: Props) {
  return (
    <div className="flex flex-col w-full p-4 mt-4 text-xs lg:mt-0 lg:min-w-0 bg-base-300">
      <h1 className="mb-1 text-xl border-b border-neutral">Information</h1>
      <div className="flex flex-col justify-between py-1">
        <p className="font-bold">Release Date</p>
        <p>{formatDate(movie.release_date)}</p>
      </div>
      <div className="flex flex-col justify-between py-1">
        <p className="font-bold">Genres</p>
        <p>{movie.genres.map((genre) => genre.name).join(", ")}</p>
      </div>
      <div className="flex flex-col justify-between py-1">
        <p className="font-bold">Budget</p>
        <p>{movie.budget.toLocaleString()} usd</p>
      </div>
      <div className="flex flex-col justify-between py-1">
        <p className="font-bold">Revenue</p>
        <p>{movie.revenue.toLocaleString()} usd</p>
      </div>
      <div className="flex flex-col justify-between py-1">
        <p className="font-bold">Production</p>
        {movie.production_companies
          .map((company: Production) => company.name)
          .join(", ")}
      </div>
      <div className="flex flex-col justify-between py-1">
        <p className="font-bold">Website</p>
        <a
          href={movie.homepage}
          className="italic truncate"
          rel="noreferrer"
          target="_blank"
        >
          {movie.homepage}
        </a>
      </div>
    </div>
  );
}

export default Info;
