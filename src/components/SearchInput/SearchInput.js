import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import styles from './SearchInput.scss';

const SearchInput = () => (
  <form id="search" className={styles.search}>
    <input type="search" form="search" className={styles.search__input} placeholder="Search..." />
    <AiOutlineSearch className={styles.search__btn} />
  </form>
);

export default SearchInput;
