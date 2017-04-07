/**
 * @fileOverview The app main entry point.
 */

// Include the main scss file for webpack processing.
require('../css/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Posts from './containers/posts.cont';
import CreatePost from './containers/create-post.cont';
import PostDetails from './containers/post-details.cont';
import { Router, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import store from './store';

let appBoot = module.exports = {};

appBoot.init = function() {
  console.log('init() :: App starts booting...');

  const history = syncHistoryWithStore(browserHistory, store);

  ReactDOM.render(
    <Provider store={store}>
      <Router history={history}>
        <Route path='/' component={Posts}></Route>

        <Route path='/create' component={CreatePost}></Route>
        <Route path='/post/:id' component={PostDetails}></Route>
      </Router>
    </Provider>,
    document.getElementById('app')
  );

};

// init app
appBoot.init();
