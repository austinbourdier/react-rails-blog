/**
 * @fileOverview Posts related actions.
 */

import axios from 'axios';

import {
  FETCH_POSTS_SUCCESS,
} from '../constants/reducer-actions.const';

/**
 * Fetch posts.
 *
 * @return {Function} The action handler.
 */
export const fetchPosts = () => {
  return function(dispatch) {
    // this could probably be updated to /posts (add a rails posts_controller.rb)
    axios.get('/home/posts')
      .then((res) => {
        dispatch({
          type: FETCH_POSTS_SUCCESS,
          posts: res.data.posts,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
