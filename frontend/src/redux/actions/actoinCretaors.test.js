import axios from 'axios';
import { getAll, getById, createItem } from './actionsCreators';
import actionTypes from './actionsTypes';

jest.mock('axios');

describe('Given a getAll function', () => {
  describe('When is invoked', () => {
    test('Should dispach', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce(
        {
          schools: 'hola'
        }
      );

      await getAll()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given a getById function', () => {
  describe('When is invoked', () => {
    test('Should dispach', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce(
        {
          data: 'hola'
        }
      );

      await getById()(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given a createItem function', () => {
  describe('When is invoked', () => {
    test('Should dispach', async () => {
      const dispatch = jest.fn();
      const school = { name: 'school' };
      axios.post.mockResolvedValueOnce(
        {
          type: actionTypes.CREATE_ITEM,
          data: 'school'
        }
      );

      await createItem(school)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});
