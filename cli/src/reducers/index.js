import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import Users from './userReducer';
import UsersSave from './userSaveReducer';
export const Reducers = combineReducers({
   form: reduxFormReducer,
   Users:Users,
   UsersSave:UsersSave
});