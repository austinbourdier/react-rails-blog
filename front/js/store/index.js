import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import CreatePost from '../reducers/create-post.redux';
import Posts from '../reducers/posts.redux';
import PostDetails from '../reducers/post-details.redux';

const store = createStore(
  combineReducers({
    CreatePost,
    Posts,
    PostDetails,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
);

export default store;
