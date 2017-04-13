/**
 * @fileOverview Posts related actions.
 */

import axios from 'axios';

import {
  FETCH_POST_DETAILS_SUCCESS
} from '../constants/reducer-actions.constant';

/**
 * Fetch post details.
 *
 * @return {Function} The action handler.
 */
export const fetchPost = (id) => {
  return function(dispatch) {
    // this could probably be updated to /posts (add a rails posts_controller.rb)
    axios.get('/post/find/' + id)
      .then((res) => {
        dispatch({
          type: FETCH_POST_DETAILS_SUCCESS,
          post: res.data.post
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };
};
