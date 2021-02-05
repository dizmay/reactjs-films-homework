/* eslint-disable react/no-array-index-key */
import React from 'react';
import styles from './MovieDetails.scss';
import Rating from '../Rating/Rating';
import ButtonElement from '../ButtonElement/ButtonElement';

const MovieDetails = () => {
  const averageRate = 4.8;
  const genres = ['Adventure', 'Drama', 'Family', 'Fantasy'];
  return (
    <div className={styles.details__container}>
      <div className={styles.details}>
        <h2 className={styles.details__title}>the jungle book</h2>
        <div className={styles.details__more}>
          <ul className={styles.details__genres}>
            {
              genres.map((elem, i) => <li key={i}>{elem}</li>)
            }
          </ul>
          <span className={styles.details__separator}>|</span>
          <span className={styles.details__duration}>1h 46m</span>
        </div>
        <div className={styles.rating__container}>
          <Rating averageRating={averageRate} />
          <div className={styles.averageRate}>{averageRate}</div>
        </div>
      </div>
      <div className={styles.buttons}>
        <ButtonElement blue>Watch Now</ButtonElement>
        <ButtonElement transparent>View Info</ButtonElement>
      </div>
    </div>
  );
};

export default MovieDetails;
