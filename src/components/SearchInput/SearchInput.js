import React from 'react';
import styles from './SearchInput.scss';

const SearchInput = () => (
  <form id="search" className={styles.search}>
    <input type="search" form="search" className={styles.search__input} placeholder="Search..." />
    <span className={styles.search__btn}>⌕</span>
  </form>
);

export default SearchInput;
