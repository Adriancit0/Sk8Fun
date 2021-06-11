import actionTypes from '../actions/actionsTypes';

function itemSelectedReducer(itemSelected = {}, action) {
  switch (action.type) {
    case actionTypes.GET_BY_ID:
      return action.itemSelected;
    default:
      return itemSelected;
  }
}

export default itemSelectedReducer;
