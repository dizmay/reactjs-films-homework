import searchReducer, {
  FETCH_POPULAR, FETCH_FOUND, FETCH_GENRES, FETCH_MOVIE_TRAILER,
} from '../searchReducer';

describe('search reducer', () => {
  it('should fetch popular films', () => {
    const startAction = { type: FETCH_POPULAR };
    expect(searchReducer({}, startAction)).toEqual({});
  });

  it('should fetch search results', () => {
    const startAction = { type: FETCH_FOUND };
    expect(searchReducer({}, startAction)).toEqual({});
  });

  it('should fetch movie genres', () => {
    const startAction = { type: FETCH_GENRES };
    expect(searchReducer({}, startAction)).toEqual({});
  });

  it('should fetch movie trailer', () => {
    const startAction = { type: FETCH_MOVIE_TRAILER };
    expect(searchReducer({}, startAction)).toEqual({});
  });

  it('should return state', () => {
    const startAction = {};
    expect(searchReducer({}, startAction)).toEqual({});
  });
});
