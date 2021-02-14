/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../MovieCard/MovieCard';
import styles from './MovieList.scss';

const MovieList = ({
  popularMovies, genres, movieTrailer, getMovieTrailer,
}) => (
  <div className={styles.movieList__container}>
    {
      popularMovies.length > 0
        ? (
          <div className={styles.movieList__grid}>
            {
              popularMovies.map((movie, index) => (
                <MovieCard
                  key={index}
                  title={movie.title}
                  rate={movie.vote_average}
                  poster={movie.poster_path}
                  movieGenres={movie.genre_ids}
                  genres={genres}
                  overview={movie.overview}
                  movieId={movie.id}
                  movieTrailer={movieTrailer}
                  getMovieTrailer={getMovieTrailer}
                />
              ))
            }
          </div>
        )
        : <h5 className={styles.movieList__empty}>No results</h5>
    }
  </div>
);

MovieList.defaultProps = {
  popularMovies: [],
  genres: [],
  movieTrailer: '',
  getMovieTrailer: null,
};

MovieList.propTypes = {
  popularMovies: PropTypes.arrayOf(PropTypes.object),
  genres: PropTypes.arrayOf(PropTypes.object),
  movieTrailer: PropTypes.string,
  getMovieTrailer: PropTypes.func,
};

export default MovieList;
