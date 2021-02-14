import React from 'react';
import SearchInputContainer from '../SearchInput/SearchInputContainer';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <h2 className={styles.header__logo}>FILMS</h2>
    <SearchInputContainer />
  </header>
);

export default Header;
