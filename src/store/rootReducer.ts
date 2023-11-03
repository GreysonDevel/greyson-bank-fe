import { combineReducers } from 'redux';
import authReducer from './authSlice';
import modalReducer from './modalSlice';
// add corresponding reducers
export const rootReducer = combineReducers({
  auth: authReducer.reducer,
  modal: modalReducer.reducer,
});
