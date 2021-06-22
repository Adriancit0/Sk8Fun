import actionTypes from '../actions/actionsTypes';
import schoolListReducer from './schoolListReducer';

describe('Given a schoolListReducer', () => {
  describe('When action.type equals actionTypes.GET_ALL ', () => {
    test('return action.schoolList', () => {
      const schoolList = [];
      const action = {
        type: actionTypes.GET_ALL,
        schoolList
      };
      const result = schoolListReducer(schoolList, action);
      expect(result).toEqual(action.schoolList);
    });
  });
});
