import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import styles from './MovieInfo.scss';

const MovieInfo = ({
  title,
  rate,
  genres,
  black,
  white,
}) => {
  const titleStyle = classNames(
    styles.info__title,
    {
      [styles.info__title_black]: black,
      [styles.info__title_white]: white,
    },
  );
  return (
    <div className={styles.info__container}>
      <div className={styles.info}>
        <span className={titleStyle}>{ title }</span>
        <div className={styles.info__rate}>{ rate.toFixed(1) }</div>
      </div>
      <div className={styles.info__genres}>{ genres }</div>
    </div>
  );
};

MovieInfo.defaultProps = {
  title: '',
  rate: 0,
  genres: '',
  black: true,
  white: false,
};

MovieInfo.propTypes = {
  title: PropTypes.string,
  rate: PropTypes.number,
  genres: PropTypes.string,
  black: PropTypes.bool,
  white: PropTypes.bool,
};

export default MovieInfo;
