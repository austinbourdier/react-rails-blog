/**
 * @fileOverview The app main entry point.
 */

// Include the main scss file for webpack processing.
require('../css/app.scss');

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { Router, IndexRoute, Route, browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import App from './components/app.component';
import Navbar from './containers/navbar.container';
import Login from './containers/login.container';
import Register from './containers/register.container';
import Posts from './containers/posts.container';
import UserPage from './containers/user-page.container';
import CreatePost from './containers/create-post.container';
import PostDetails from './containers/post-details.container';
import store from './store';
const history = syncHistoryWithStore(browserHistory, store);

let appBoot = module.exports = {};

appBoot.init = function() {
  console.log('init() :: App starts booting...');

  ReactDOM.render(
    <div>
      <Provider store={store}>
        <Router history={history}>
          <Route path='/' component={App}>
            <IndexRoute onEnter={authCheck} component={Posts}/>
            <Route path='/user/:id' onEnter={authCheck} component={UserPage}></Route>

            <Route path='/login' component={Login}></Route>
            <Route path='/register' component={Register}></Route>

            <Route path='/create' onEnter={authCheck} component={CreatePost}></Route>
            <Route path='/post/:id' onEnter={authCheck} component={PostDetails}></Route>
          </Route>
        </Router>
      </Provider>
    </div>,
    document.getElementById('app')
  );

};

const authCheck = (() => {
  const userLoggedIn = document.cookie.match(new RegExp('current_user_id=([^;]+)'));
  if (!userLoggedIn) history.push('/login');
});

// init app
appBoot.init();

