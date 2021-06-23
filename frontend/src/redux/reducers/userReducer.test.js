import actionsTypes from '../actions/actionsTypes';
import userReducer from './userReducer';

describe('Given a userReducer', () => {
  describe('When action.type equals actionTypes.LOG_IN ', () => {
    test('return action.user', () => {
      const user = {};
      const action = {
        type: actionsTypes.LOG_IN,
        user
      };
      const result = userReducer(user, action);
      expect(result).toEqual(action.user);
    });
  });
  describe('When action.type equals actionTypes.GET_USER_DATA ', () => {
    test('return action.user', () => {
      const user = {};
      const action = {
        type: actionsTypes.GET_USER_DATA,
        user
      };
      const result = userReducer(user, action);
      expect(result).toEqual(action.user);
    });
  });
  describe('When action.type equals actionTypes.SIGN_UP ', () => {
    test('return action.user', () => {
      const user = {};
      const action = {
        type: actionsTypes.SIGN_UP,
        user
      };
      const result = userReducer(user, action);
      expect(result).toEqual(action.user);
    });
  });
});
