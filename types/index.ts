export type MediaType = "movie" | "tv";
export type MediaParamType = "/movies" | "/series";
export type Path = `/${string}`;
export type Genre = {
  id: string;
  name: string;
  isLinkActive: boolean;
  path: Path;
};
export type MediaItem = {
  adult: boolean;
  backdrop_path: string;
  genre_ids: [any];
  id: number;
  media_type: MediaType;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  first_air_date: string;
  title: string;
  name: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  genres: [{ id: string; name: string }];
};
