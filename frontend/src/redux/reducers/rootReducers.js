import { combineReducers } from 'redux';
import itemSelectedReducer from './itemSelectedReducer';
import schoolListReducer from './schoolListReducer';
import createItemReducer from './createItemReducer';

export default combineReducers({
  schoolList: schoolListReducer,
  itemSelected: itemSelectedReducer,
  newItem: createItemReducer
});
