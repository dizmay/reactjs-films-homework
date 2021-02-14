import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './SearchInput.scss';

const SearchInput = ({ search }) => {
  const [value, setValue] = useState('');
  const onSearchChange = (e) => {
    setValue(e.currentTarget.value);
  };
  const startSearch = (e) => {
    e.preventDefault();
    search(value);
  };
  return (
    <form id="search" className={styles.search} onSubmit={startSearch}>
      <input type="search" value={value} onChange={onSearchChange} form="search" className={styles.search__input} placeholder="Search..." />
      <button type="submit" className={styles.search__btn}>⌕</button>
    </form>
  );
};

SearchInput.defaultProps = {
  search: null,
};

SearchInput.propTypes = {
  search: PropTypes.func,
};

export default SearchInput;
