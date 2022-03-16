import queryString from 'query-string';
import useSWR from 'swr';

const BASE_URL: string = 'https://api.themoviedb.org/3';
const API_KEY: string = process.env.NEXT_PUBLIC_API_KEY;

const fetcher = (url: string) => fetch(url).then((res) => res.json());

export const useMovies = (endpoint: string, params: any = {}) => {
  params = {
    api_key: API_KEY,
    region: 'US',
    page: params.page || params.page === 0 ? 1 : params.page,
    ...params,
  };

  const query = queryString.stringify(params);
  const { data, error } = useSWR(`${BASE_URL}${endpoint}?${query}`, fetcher);

  return {
    data,
    isLoading: !error && !data,
    isError: error,
  };
};
