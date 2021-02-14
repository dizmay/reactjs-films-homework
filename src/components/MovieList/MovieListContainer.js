/* eslint-disable react/no-array-index-key */
import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { fetchGenres, fetchTopRated, fetchMovieTrailer } from '../../modules/Search/searchActions';
import MovieList from './MovieList';

const MovieListContainer = ({
  popularMovies,
  getTopRated,
  getGenres,
  genres,
  movieTrailer,
  getMovieTrailer,
}) => {
  useEffect(() => {
    getTopRated();
    getGenres();
  }, []);
  return (
    <MovieList
      popularMovies={popularMovies}
      genres={genres}
      movieTrailer={movieTrailer}
      getMovieTrailer={getMovieTrailer}
    />
  );
};

MovieListContainer.defaultProps = {
  popularMovies: [],
  getTopRated: null,
  getGenres: null,
  genres: [],
  movieTrailer: '',
  getMovieTrailer: null,

};

MovieListContainer.propTypes = {
  popularMovies: PropTypes.arrayOf(PropTypes.object),
  getTopRated: PropTypes.func,
  getGenres: PropTypes.func,
  genres: PropTypes.arrayOf(PropTypes.object),
  movieTrailer: PropTypes.string,
  getMovieTrailer: PropTypes.func,
};

const mapStateToProps = (state) => ({
  popularMovies: state.search.movies,
  genres: state.search.genres,
  movieTrailer: state.search.movieTrailer,
});

const mapDispatchToProps = (dispatch) => ({
  getTopRated: () => dispatch(fetchTopRated()),
  getGenres: () => dispatch(fetchGenres()),
  getMovieTrailer: (movieId) => dispatch(fetchMovieTrailer(movieId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MovieListContainer);
