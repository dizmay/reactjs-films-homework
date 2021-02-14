import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchFound } from '../../modules/Search/searchActions';
import SearchInput from './SearchInput';

const SearchInputContainer = ({ search }) => <SearchInput search={search} />;

SearchInputContainer.defaultProps = {
  search: null,
};

SearchInputContainer.propTypes = {
  search: PropTypes.func,
};

const mapDispatchToProps = (dispatch) => ({ search: (query) => dispatch(fetchFound(query)) });

export default connect(null, mapDispatchToProps)(SearchInputContainer);
