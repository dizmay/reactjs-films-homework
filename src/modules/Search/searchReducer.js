export const FETCH_POPULAR = 'FETCH_POPULAR';
export const FETCH_FOUND = 'FETCH_FOUND';
export const FETCH_GENRES = 'FETCH_GENRES';
export const FETCH_MOVIE_TRAILER = 'FETCH_MOVIE_TRAILER';

const initialState = {
  movies: [],
  movieTrailer: '',
  genres: [],
};

const searchReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_POPULAR:
      return { ...state, movies: action.payload };
    case FETCH_FOUND:
      return { ...state, movies: action.payload };
    case FETCH_GENRES:
      return { ...state, genres: action.payload };
    case FETCH_MOVIE_TRAILER:
      return { ...state, movieTrailer: action.payload };
    default:
      return state;
  }
};

export default searchReducer;
