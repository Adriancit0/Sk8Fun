import actionsTypes from '../actions/actionsTypes';
import itemSelectedReducer from './itemSelectedReducer';

describe('Given a itemSelectedReducer', () => {
  describe('When action.type equals actionTypes.GET_BY_ID ', () => {
    test('return action.trip', () => {
      const trip = {};
      const action = {
        type: actionsTypes.GET_BY_ID,
        trip
      };
      const result = itemSelectedReducer(trip, action);
      expect(result).toEqual(action.trip);
    });
  });
  describe('When action.type equals actionTypes.CREATE_ITEM ', () => {
    test('return action.trip', () => {
      const trip = {};
      const action = {
        type: actionsTypes.CREATE_ITEM,
        trip
      };
      const result = itemSelectedReducer(trip, action);
      expect(result).toEqual(action.trip);
    });
  });
  describe('When action.type equals actionTypes.DELETE_ITEM ', () => {
    test('return action.trip', () => {
      const trip = {};
      const action = {
        type: actionsTypes.DELETE_ITEM,
        trip
      };
      const result = itemSelectedReducer(trip, action);
      expect(result).toEqual(action.trip);
    });
  });
});
