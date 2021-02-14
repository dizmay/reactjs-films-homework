import {
  applyMiddleware,
  combineReducers,
  createStore,
  compose,
} from 'redux';
import thunk from 'redux-thunk';
import searchReducer from './Search/searchReducer';

const store = createStore(combineReducers({
  search: searchReducer,
}), compose(
  applyMiddleware(thunk),
));

export default store;
