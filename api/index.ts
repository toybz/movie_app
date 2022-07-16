import { MediaType } from "../types";

const BASE_URL = process.env.MOVIE_PROVIDER_ENDPOINT;
const API_KEY = process.env.MOVIE_PROVIDER_KEY;

// add the base url and api key to provided path
const createUrl = (path: string) => {
  return path.includes("?")
    ? `${BASE_URL}/${path}&api_key=${API_KEY}`
    : `${BASE_URL}/${path}?api_key=${API_KEY}`;
};

export const fetchTrending = async (type: MediaType) => {
  const url = createUrl(`trending/${type}/day`);
  return await fetch(url);
};

export const fetchGenres = async (type: MediaType) => {
  const url = createUrl(`genre/${type}/list`);
  return await fetch(url);
};

export const fetchGenreMovies = async (
  type: MediaType,
  genreId: string | number
) => {
  const url = createUrl(`discover/${type}?with_genres=${genreId}`);
  return await fetch(url);
};

export const fetchMovieDetails = async (type: MediaType, movieId: string) => {
  const url = createUrl(`${type}/${movieId}`);
  return await fetch(url);
};

export const search = async (type: MediaType, query: string) => {
  console.log("server query", createUrl(`search/${type}?query${query}`));
  const url = createUrl(`search/${type}?query=${query}`);
  return await fetch(url);
};
