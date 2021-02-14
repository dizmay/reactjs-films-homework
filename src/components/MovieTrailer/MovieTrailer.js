import React from 'react';
import PropTypes from 'prop-types';
import styles from './MovieTrailer.scss';

const MovieTrailer = ({ movieTrailer, showTrailer }) => (
  <div className={styles.trailer__container}>
    <button type="button" onClick={showTrailer} className={styles.trailer__close}>x</button>
    <div className={styles.trailer__modal}>
      <iframe className={styles.trailer__video} src={`https://www.youtube.com/embed/${movieTrailer}`} title="Movie trailer" />
    </div>
  </div>
);

MovieTrailer.defaultProps = {
  movieTrailer: '',
  showTrailer: null,
};

MovieTrailer.propTypes = {
  movieTrailer: PropTypes.string,
  showTrailer: PropTypes.func,
};

export default MovieTrailer;
