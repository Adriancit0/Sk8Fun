import { combineReducers } from 'redux';
import schoolListReducer from './schoolListReducer';

export default combineReducers({
  schoolList: schoolListReducer
});
