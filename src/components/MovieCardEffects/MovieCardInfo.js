import React from 'react';
import PropTypes from 'prop-types';
import ButtonElement from '../ButtonElement/ButtonElement';
import MovieInfo from '../MovieInfo/MovieInfo';
import styles from './MovieCardInfo.scss';

const MovieCardInfo = ({
  info, showInfo, movieInfo, showTrailer,
}) => (
  <div className={info ? styles.info__container : styles.info__container_hide}>
    <button type="button" onClick={showInfo} className={styles.info__close}>x</button>
    <MovieInfo
      title={movieInfo.title}
      rate={movieInfo.rate}
      genres={movieInfo.genres}
      white
    />
    <span className={styles.info_overview}>{movieInfo.overview}</span>
    <ButtonElement blue clickFunc={showTrailer}>Watch Now</ButtonElement>
  </div>
);

MovieCardInfo.defaultProps = {
  info: false,
  showInfo: null,
  movieInfo: {},
  showTrailer: null,
};

MovieCardInfo.propTypes = {
  info: PropTypes.bool,
  showInfo: PropTypes.func,
  movieInfo: PropTypes.objectOf(PropTypes.any),
  showTrailer: PropTypes.func,
};

export default MovieCardInfo;
