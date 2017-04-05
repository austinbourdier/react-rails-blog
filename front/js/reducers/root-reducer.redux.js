/**
 * @fileOverview The root reducer, combines all reducers.
 */

import { combineReducers } from 'redux';

import posts from './posts.redux';
import createPost from './create-post.redux';

export default combineReducers({
  posts,
  createPost
});
