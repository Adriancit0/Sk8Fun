import actionTypes from '../actions/actionsTypes';

function createItemReducer(itemSelected = {}, action) {
  switch (action.type) {
    case actionTypes.CREATE_ITEM:
      return action.itemSelected;
    default:
      return itemSelected;
  }
}

export default createItemReducer;
