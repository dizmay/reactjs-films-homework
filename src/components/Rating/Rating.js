/* eslint-disable react/no-array-index-key */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Rating.scss';

const Rating = ({ averageRating }) => {
  const fillStars = Math.round(averageRating);
  const ratingArr = new Array(5).fill(0);
  return (
    <div className={styles.rating}>
      {
        ratingArr.map((elem, id) => {
          if (id + 1 > fillStars) return <div key={id}>☆</div>;
          return <div key={id}>★</div>;
        })
      }
    </div>
  );
};

Rating.defaultProps = {
  averageRating: 0,
};

Rating.propTypes = {
  averageRating: PropTypes.number,
};

export default Rating;
