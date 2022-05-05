import Results from "components/Results";
import { useMovies } from "hooks";
import React from "react";

interface Props {
  id: string;
}
function SimilarMovies({ id }: Props) {
  const { data, isLoading } = useMovies(`/movie/${id}/similar`);

  if (isLoading) return <div />;

  return (
    <div className="overflow-x-auto">
      <h1 className="pb-1 text-xl border-b border-neutral">Similar Movies</h1>
      <Results results={data.results} classes="flex my-4 space-x-2" />
    </div>
  );
}

export default SimilarMovies;
