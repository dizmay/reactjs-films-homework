import React from 'react';
import PropTypes from 'prop-types';
import shortid from 'shortid';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from './Rating.scss';

const Rating = ({ averageRating }) => {
  const fillStars = Math.round(averageRating);
  const outlineStars = 5 - fillStars;
  const createArray = (length) => new Array(length).fill(0);
  return (
    <div className={styles.rating}>
      {createArray(fillStars).map(() => <AiFillStar key={shortid.generate()} />)}
      {createArray(outlineStars).map(() => <AiOutlineStar key={shortid.generate()} />)}
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
