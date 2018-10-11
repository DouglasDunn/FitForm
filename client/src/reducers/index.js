import { combineReducers } from 'redux';
import authReducer from './authReducer';
import errorReducer from './errorReducer';
import profileReducer from './profileReducer';
import goalReducer from './goalReducer';
import dailyProgressReducer from './dailyProgressReducer';

export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  profile: profileReducer,
  goal: goalReducer,
  dailyProgress: dailyProgressReducer
});
