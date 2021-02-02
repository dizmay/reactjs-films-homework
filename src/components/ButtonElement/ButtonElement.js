import React from 'react';
import PropTypes from 'prop-types';
import styles from './ButtonElement.scss';

const ButtonElement = ({ children, buttonStyle }) => (
  <button type="button" className={`${styles.btn} ${buttonStyle ? styles.blue : styles.transparent}`}>{children}</button>
);

ButtonElement.defaultProps = {
  children: null,
  buttonStyle: true,
};

ButtonElement.propTypes = {
  children: PropTypes.string,
  buttonStyle: PropTypes.bool,
};

export default ButtonElement;
