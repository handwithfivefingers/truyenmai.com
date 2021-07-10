import { combineReducers } from 'redux';
import authReducer from './auth.reducer';
import blogReducer from './blog.reducer';
const rootReducer = combineReducers({
  blog: blogReducer,
  auth: authReducer,
});
export default rootReducer;
