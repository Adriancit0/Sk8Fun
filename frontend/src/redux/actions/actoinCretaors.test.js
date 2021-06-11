import axios from 'axios';
import { getAll, getById } from './actionsCreators';

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
