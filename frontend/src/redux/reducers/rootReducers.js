import { combineReducers } from 'redux';
import itemSelectedReducer from './itemSelectedReducer';
import schoolListReducer from './schoolListReducer';

export default combineReducers({
  schoolList: schoolListReducer,
  itemSelected: itemSelectedReducer
});
