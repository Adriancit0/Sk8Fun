import actionTypes from '../actions/actionsTypes';

function schoolListReducer(schoolList = [], action) {
  switch (action.type) {
    case actionTypes.GET_ALL:
      return action.schoolList;
    default:
      return schoolList;
  }
}
export default schoolListReducer;
