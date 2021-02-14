import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import styles from './ButtonElement.scss';

const ButtonElement = ({
  children,
  blue,
  transparent,
  clickFunc,
}) => {
  const buttonStyle = classNames(
    styles.btn,
    {
      [styles.blue]: blue,
      [styles.transparent]: transparent,
    },
  );
  return (
    <button type="button" onClick={clickFunc} className={buttonStyle}>{children}</button>
  );
};

ButtonElement.defaultProps = {
  children: null,
  blue: false,
  transparent: false,
  clickFunc: null,
};

ButtonElement.propTypes = {
  children: PropTypes.string,
  blue: PropTypes.bool,
  transparent: PropTypes.bool,
  clickFunc: PropTypes.func,
};

export default ButtonElement;
