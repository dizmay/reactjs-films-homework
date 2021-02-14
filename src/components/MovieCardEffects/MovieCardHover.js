import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MovieCardInfo from './MovieCardInfo';
import ButtonElement from '../ButtonElement/ButtonElement';
import styles from './MovieCardHover.scss';

const MovieCardHover = ({ hover, showTrailer, ...props }) => {
  const [info, setInfo] = useState(false);
  const showInfo = () => {
    setInfo(!info);
  };
  return (
    <>
      {
        info
          ? (
            <MovieCardInfo
              info={info}
              showInfo={showInfo}
              movieInfo={props}
              showTrailer={showTrailer}
            />
          )
          : (
            <div className={hover ? styles.hover__container : styles.hover_hideContainer}>
              <div className={styles.hover__watchNow}>
                <button type="button" onClick={showTrailer} className={styles.watchNow__btn}>&#9658;</button>
                <span className={styles.watchNow__title}>Watch Now</span>
              </div>
              <ButtonElement transparent clickFunc={showInfo}>View Info</ButtonElement>
            </div>
          )
      }
    </>
  );
};

MovieCardHover.defaultProps = {
  hover: false,
  showTrailer: null,
};

MovieCardHover.propTypes = {
  hover: PropTypes.bool,
  showTrailer: PropTypes.func,
};

export default MovieCardHover;
