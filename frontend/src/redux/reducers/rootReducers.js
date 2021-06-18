import { combineReducers } from 'redux';
import itemSelectedReducer from './itemSelectedReducer';
import schoolListReducer from './schoolListReducer';
import userReducer from './userReducer';

export default combineReducers({
  schoolList: schoolListReducer,
  itemSelected: itemSelectedReducer,
  user: userReducer
});
