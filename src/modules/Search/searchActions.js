import {
  FETCH_POPULAR,
  FETCH_FOUND,
  FETCH_GENRES,
  FETCH_MOVIE_TRAILER,
} from './searchReducer';

export const fetchTopRated = () => (
  async (dispatch) => {
    const response = await fetch('https://api.themoviedb.org/3/movie/popular?api_key=8af65622e3e37982dc0c9106f73bf5e1&language=en-US&page=1');
    const json = await response.json();
    dispatch({ type: FETCH_POPULAR, payload: json.results });
  }
);

export const fetchFound = (query) => (
  async (dispatch) => {
    const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=8af65622e3e37982dc0c9106f73bf5e1&language=en-US&query=${query}&page=1`);
    const json = await response.json();
    dispatch({ type: FETCH_FOUND, payload: json.results });
  }
);

export const fetchGenres = () => (
  async (dispatch) => {
    const response = await fetch('https://api.themoviedb.org/3/genre/movie/list?api_key=8af65622e3e37982dc0c9106f73bf5e1&language=en-US');
    const json = await response.json();
    dispatch({ type: FETCH_GENRES, payload: json.genres });
  }
);

export const fetchMovieTrailer = (movieId) => (
  async (dispatch) => {
    const response = await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=8af65622e3e37982dc0c9106f73bf5e1&language=en-US`);
    const json = await response.json();
    dispatch({ type: FETCH_MOVIE_TRAILER, payload: json.results[0].key });
  }
);
