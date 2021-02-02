/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import styles from './Rating.scss';

const Rating = () => (
  <div className={styles.rateContainer}>
    <div className={styles.rate}>
      <input type="radio" id="star5" />
      <label htmlFor="star5" />
      <input type="radio" id="star4" />
      <label htmlFor="star4" />
      <input type="radio" id="star3" />
      <label htmlFor="star3" />
      <input type="radio" id="star2" />
      <label htmlFor="star2" />
      <input type="radio" id="star1" />
      <label htmlFor="star1" />
    </div>
    <div className={styles.averageRate}>4.8</div>
  </div>
);

export default Rating;
