import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './modules/store';
import App from './App';

const RootApp = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

ReactDOM.render(<RootApp />, document.querySelector('#root'));
