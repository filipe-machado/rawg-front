import { combineReducers } from 'redux';

import auth from './auth';
import loader from './loader';
import games from './games';

export default combineReducers({
  auth,
  loading: loader,
  games,
});
