import actionsTypes from '../actions/actionsTypes';
import userReducer from './userReducer';

describe('Given a userReducer', () => {
  describe('When action.type equals actionTypes.LOG_IN ', () => {
    test('return action.trip', () => {
      const trip = {};
      const action = {
        type: actionsTypes.LOG_IN,
        trip
      };
      const result = userReducer(trip, action);
      expect(result).toEqual(action.trip);
    });
  });
  describe('When action.type equals actionTypes.GET_USER_DATA ', () => {
    test('return action.trip', () => {
      const trip = {};
      const action = {
        type: actionsTypes.GET_USER_DATA,
        trip
      };
      const result = userReducer(trip, action);
      expect(result).toEqual(action.trip);
    });
  });
});
