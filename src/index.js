import 'babel-polyfill';
import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, combineReducers, applyMiddleware, compose} from 'redux';
import reducers from './reducers/index';
import App from './app';
import { notifier } from './middlewares/notifier';
import { logger } from './middlewares/logger';

const reducer = combineReducers(reducers);

const middleware = applyMiddleware(
  logger, notifier
);

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducer,
  composeEnhancers(middleware));

function renderApp () {
  render((
    <Provider store={store}>
      <App />
    </Provider>
  ), document.getElementById('root'));
}
renderApp();
