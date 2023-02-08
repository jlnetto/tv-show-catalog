import { combineReducers } from 'redux';

import authReducer from './auth';
import tvShowsReducer from './tvShowsReducer';

const rootReducer = combineReducers({
  auth: authReducer,
  show: tvShowsReducer,
});

export default rootReducer;
