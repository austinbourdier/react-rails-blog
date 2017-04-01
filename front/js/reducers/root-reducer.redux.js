/**
 * @fileOverview The root reducer, combines all reducers.
 */

import { combineReducers } from 'redux';

import serverTimestamp from './server-timestamp.redux';
import posts from './posts.redux';

export default combineReducers({
  posts,
  serverTimestamp,
});
