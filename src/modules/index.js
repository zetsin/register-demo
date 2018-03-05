import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import { reducer as reduxFormReducer } from 'redux-form';
import app from './app';

export default combineReducers({
  router: routerReducer,
  form: reduxFormReducer,
  app
});
