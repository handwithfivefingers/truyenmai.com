import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import blogReducer from './blog.reducer';
import actReducer from './act.reducer';
const rootReducer = combineReducers({
  blog: blogReducer,
  auth: authReducer,
  action: actReducer,
});
export default rootReducer;
