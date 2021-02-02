import React from 'react';
import styles from './MovieDetails.scss';
import Rating from '../Rating/Rating';
import ButtonElement from '../ButtonElement/ButtonElement';

const MovieDetails = () => (
  <div className={styles.details__container}>
    <div className={styles.details}>
      <h2 className={styles.details__title}>the jungle book</h2>
      <div className={styles.details__more}>
        <ul className={styles.details__genres}>
          <li>Adventure</li>
          <li>Drama</li>
          <li>Family</li>
          <li>Fantasy</li>
          <li>|</li>
        </ul>
        <span className={styles.details__duration}>1h 46m</span>
      </div>
      <Rating />
    </div>
    <div className={styles.buttons}>
      <ButtonElement buttonStyle>Watch Now</ButtonElement>
      <ButtonElement buttonStyle={false}>View Info</ButtonElement>
    </div>
  </div>
);

export default MovieDetails;
