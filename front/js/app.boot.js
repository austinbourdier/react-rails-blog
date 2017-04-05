/**
 * @fileOverview The app main entry point.
 */

// Include the main scss file for webpack processing.
require('../css/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';

import rootReducer from './reducers/root-reducer.redux';
import Posts from './containers/posts.cont';
import CreatePost from './containers/create-post.cont';
import { Router, Route, browserHistory, Link } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';

let appBoot = module.exports = {};

appBoot.init = function() {
  console.log('init() :: App starts booting...');

  // Check for devToolsExtension
  const create = window.devToolsExtension ?
    window.devToolsExtension()(createStore) : createStore;

  // // Apply thunk and additional middleware if applicable
  // const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(create);

  // // Init store
  // const store = createStoreWithMiddleware(rootReducer);
  const history = syncHistoryWithStore(browserHistory, store)
  // ReactDom.render(
  //   <Provider store={ store }>
  //     <HelloWorld />
  //   </Provider>,
  //   document.getElementById('app')
  // );

ReactDOM.render(
  <Provider store={store}>
    <Router history={history}>
      <Route path='/' component={Posts}></Route>

      <Route path='/create' component={CreatePost}></Route>
    </Router>
  </Provider>,
  document.getElementById('app')
);

};

// init app
appBoot.init();
