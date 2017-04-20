import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { routerReducer } from 'react-router-redux';
import Login from '../reducers/login.reducer';
// import Navbar from '../reducers/navbar.reducer';
import UserPage from '../reducers/user-page.reducer';
import Register from '../reducers/register.reducer';
import CreatePost from '../reducers/create-post.reducer';
import Posts from '../reducers/posts.reducer';
import PostDetails from '../reducers/post-details.reducer';

const store = createStore(
  combineReducers({
    // Navbar,
    UserPage,
    Login,
    Register,
    CreatePost,
    Posts,
    PostDetails,
    routing: routerReducer
  }),
  applyMiddleware(thunk)
);

export default store;
