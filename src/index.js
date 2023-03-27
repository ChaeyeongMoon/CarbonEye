import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import thunk from 'redux-thunk';
import LoginForm from './components/LoginForm';
import './index.css';

import authReducer from './components/reducers/authReducer';

const store = createStore(authReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <LoginForm />
  </Provider>,
  document.getElementById('root')
);
