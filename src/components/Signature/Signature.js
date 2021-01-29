import React from 'react';
import PropTypes from 'prop-types';
import styles from './Signature.scss';

const Signature = ({ name }) => (
  <div className={styles.sign}>
    <h1>{name}</h1>
  </div>
);

Signature.defaultProps = {
  name: null,
};

Signature.propTypes = {
  name: PropTypes.string,
};

export default Signature;
