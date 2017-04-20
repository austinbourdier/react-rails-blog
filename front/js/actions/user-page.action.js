/**
 * @fileOverview Register related actions.
 */

import axios from 'axios';

import {
  FETCH_USER_PAGE_SUCCESS
} from '../constants/reducer-actions.constant';

/**
 * Register, and update values on the input fields.
 *
 * @return {Function} The action handler.
 */
export const fetchUserPage = (id) => {
  return function(dispatch) {
    axios.get('/user/find/' + id)
      .then((res) => {
        dispatch({
          type: FETCH_USER_PAGE_SUCCESS,
          user: res.data.user
        });
      })
      .catch((err) => {
        //bad registration error
        alert(err);
      });
  };
};

