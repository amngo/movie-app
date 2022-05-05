import Poster from "components/Poster";
import { useMovies } from "hooks";
import Head from "next/head";
import Cast from "./Cast";
import Info from "./Info";
import SimilarMovies from "./SimilarMovies";

interface Props {
  id: string;
}

function Movie({ id }: Props) {
  const { data: movie, isLoading } = useMovies(`/movie/${id}`);

  return !isLoading ? (
    <div className="container flex flex-col h-full p-6">
      <Head>
        <title>{movie.title} - MovieFinder</title>
        <meta name="description" content={movie.overview} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <h1 className="mb-4 text-xl font-bold">{movie.title}</h1>
      <div className="flex flex-col h-full lg:flex-row">
        <div className="w-full lg:w-[250px] self-center flex flex-col items-center lg:block lg:self-auto mb-4 lg:mb-0">
          <Poster movie={movie} classes="w-[250px] h-[375px]" />
          <Info movie={movie} />
        </div>

        <div className="flex flex-col min-w-0 ml-4">
          <div className="flex flex-col">
            <h1 className="mb-2 text-xl border-b border-neutral">Overview</h1>
            <p className="pb-1 text-sm">{movie.overview}</p>
          </div>

          <Cast id={id} />
          <SimilarMovies id={id} />
        </div>
      </div>
    </div>
  ) : (
    <div />
  );
}

export default Movie;
