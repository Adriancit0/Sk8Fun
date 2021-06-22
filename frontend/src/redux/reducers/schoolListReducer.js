import actionTypes from '../actions/actionsTypes';

function schoolListReducer(schoolList = [], action) {
  if (actionTypes.GET_ALL) {
    return action.schoolList;
  }
  return schoolList;
}
export default schoolListReducer;
