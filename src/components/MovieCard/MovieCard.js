import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './MovieCard.scss';
import { genresSelector } from '../../utils/selectors';
import MovieTrailer from '../MovieTrailer/MovieTrailer';
import MovieCardHover from '../MovieCardEffects/MovieCardHover';
import MovieInfo from '../MovieInfo/MovieInfo';

const MovieCard = ({
  title,
  rate,
  poster,
  genres,
  movieGenres,
  overview,
  movieId,
  movieTrailer,
  getMovieTrailer,
}) => {
  const [hover, setHover] = useState(false);
  const [trailer, setTrailer] = useState(false);
  const showTrailer = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
    setTrailer(!trailer);
    getMovieTrailer(movieId);
  };
  const showHover = () => {
    setHover(true);
  };
  const hideHover = () => {
    setHover(false);
  };
  return (
    <div className={styles.card}>
      {
        trailer && <MovieTrailer showTrailer={showTrailer} movieTrailer={movieTrailer} />
      }
      <div className={styles.card__image} onMouseEnter={showHover} onMouseLeave={hideHover}>
        <MovieCardHover
          hover={hover}
          overview={overview}
          title={title}
          rate={rate}
          genres={movieGenres.length > 0 ? genresSelector(movieGenres, genres) : 'No genres'}
          showTrailer={showTrailer}
        />
        <img src={poster ? `https://image.tmdb.org/t/p/original${poster}` : 'http://underscoremusic.co.uk/site/wp-content/uploads/2014/05/no-poster.jpg'} alt="Movie poster" />
      </div>
      <div className={styles.card__details}>
        <MovieInfo black title={title} rate={rate} genres={movieGenres.length > 0 ? genresSelector(movieGenres, genres) : 'No genres'} />
      </div>
    </div>
  );
};

MovieCard.defaultProps = {
  title: '',
  rate: 0,
  poster: '',
  genres: [],
  movieGenres: [],
  overview: '',
  movieId: 0,
  movieTrailer: '',
  getMovieTrailer: null,
};

MovieCard.propTypes = {
  title: PropTypes.string,
  rate: PropTypes.number,
  poster: PropTypes.string,
  genres: PropTypes.arrayOf(PropTypes.object),
  movieGenres: PropTypes.arrayOf(PropTypes.number),
  overview: PropTypes.string,
  movieId: PropTypes.number,
  movieTrailer: PropTypes.string,
  getMovieTrailer: PropTypes.func,
};

export default MovieCard;
