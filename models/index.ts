export interface MovieResult {
  adult?: boolean;
  backdrop_path?: string;
  genre_ids?: Genre[];
  id?: string;
  original_language?: string;
  original_title?: string;
  overview?: string;
  popularity?: number;
  poster_path?: string;
  release_date?: string;
  title?: string;
  video?: boolean;
  vote_average?: number;
  vote_count?: number;
}

export interface Genre {
  [key: number]: string;
  id: number;
  name: string;
}

export interface MovieDetails extends MovieResult {
  budget?: number;
  revenue?: number;
  runtime?: number | null;
  homepage?: string | null;
  production_companies?: Production[];
  genres: any[];
}

export interface Production {
  name: string;
  id: number;
  logo_path: string | null;
  origin_country: string;
}

export interface Response {
  page: number;
  results: MovieResult[];
  total_pages: number;
  total_results: number;
}

export interface Person {
  adult: boolean;
  gender: number | null;
  id: number;
  known_for_department: string;
  name: string;
  original_name: string;
  profile_path: string;
  credit_id: string;
  order: number;
}

export interface Cast extends Person {
  cast_id: string;
  character: string;
}

export interface Crew extends Person {
  department: string;
  job: string;
}
