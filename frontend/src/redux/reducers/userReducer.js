import actionTypes from '../actions/actionsTypes';

export default function userReducer(user = {}, action) {
  switch (action.type) {
    case actionTypes.LOG_IN:
      return action.user;
    case actionTypes.GET_USER_DATA:
      return action.user;
    case actionTypes.SIGN_UP:
      return action.user;
    default:
      return user;
  }
}
