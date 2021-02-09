import React from 'react';
import SearchInput from '../SearchInput/SearchInput';
import styles from './Header.scss';

const Header = () => (
  <header className={styles.header}>
    <h2 className={styles.header__logo}>FILMS</h2>
    <SearchInput />
  </header>
);

export default Header;
