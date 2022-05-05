import Filter from "components/Filter";
import { Nav } from "components/Layout";
import Pagination from "components/Pagination";
import Results from "components/Results";
import { useMovies } from "hooks";
import Head from "next/head";
import { useRouter } from "next/router";

function SearchPage() {
  const router = useRouter();
  const { data, isLoading } = useMovies("/search/movie", router.query);
  if (isLoading) return <div />;

  return (
    <div className="flex justify-center w-full mt-6">
      <Head>
        <title>{router.query.query} - MovieFinder</title>
        <meta name="description" content="Search results" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="relative flex flex-col items-center h-full min-w-0">
        <div className="flex space-x-2">
          <div className="flex flex-col w-3/4 space-y-2">
            <Nav />
            <Pagination
              url={router.basePath}
              currentPage={data.page}
              totalPages={data.total_pages}
              totalResults={data.total_results}
              query={router.query}
            />
            <Results
              results={data.results}
              classes="grid grid-cols-2 mx-auto justify-items-center md:grid-cols-4 xl:grid-cols-5 gap-y-1 gap-x-1 md:gap-y-2 md:gap-x-2"
            />
            <Pagination
              url={router.basePath}
              currentPage={data.page}
              totalPages={data.total_pages}
              totalResults={data.total_results}
              query={router.query}
            />
          </div>

          <div className="w-1/4">
            <Filter genres={router.query.genres as string} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchPage;
