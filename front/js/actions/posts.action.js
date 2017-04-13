/**
 * @fileOverview Posts related actions.
 */

import axios from 'axios';

import {
  FETCH_POSTS_SUCCESS
} from '../constants/reducer-actions.constant';

/**
 * Fetch posts.
 *
 * @return {Function} The action handler.
 */
export const fetchPosts = () => {
  return function(dispatch) {
    axios.get('/post/posts')
      .then((res) => {
        dispatch({
          type: FETCH_POSTS_SUCCESS,
          posts: res.data.posts
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
