import actionTypes from '../actions/actionsTypes';

function itemSelectedReducer(itemSelected = {}, action) {
  switch (action.type) {
    case actionTypes.GET_BY_ID:
      return action.itemSelected;
    case actionTypes.CREATE_ITEM:
      return action.itemSelected;
    case actionTypes.DELETE_ITEM:
      return itemSelected;
    case actionTypes.UPDATE_ITEM:
      return action.itemSelected;
    default:
      return itemSelected;
  }
}

export default itemSelectedReducer;
