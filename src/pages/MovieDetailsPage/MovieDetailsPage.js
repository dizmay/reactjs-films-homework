import React from 'react';
import Header from '../../components/Header/Header';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import MovieListContainer from '../../components/MovieList/MovieListContainer';
import styles from './MovieDetailsPage.scss';

const MovieDetailsPage = () => (
  <>
    <div className={styles.details}>
      <Header />
      <MovieDetails />
    </div>
    <MovieListContainer />
  </>
);

export default MovieDetailsPage;
