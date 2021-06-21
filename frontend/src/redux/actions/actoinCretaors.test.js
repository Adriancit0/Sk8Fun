import axios from 'axios';
import {
  getAll, getById, createItem, deleteById, updateById, getUserData, logIn, signUp
} from './actionsCreators';
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

describe('Given a deleteItem function', () => {
  describe('When is invoked', () => {
    test('Should dispach', async () => {
      const dispatch = jest.fn();
      const school = { name: 'school' };
      axios.delete.mockResolvedValueOnce(
        {
          type: actionTypes.DELETE_ITEM,
          data: 'school'
        }
      );

      await deleteById(school)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('Given a updateById function', () => {
  describe('When is invoked', () => {
    test('Should dispach', async () => {
      const dispatch = jest.fn();
      const school = { name: 'school' };
      axios.put.mockResolvedValueOnce(
        {
          type: actionTypes.DELETE_ITEM,
          data: 'school'
        }
      );

      await updateById(school)(dispatch);

      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe('given a signUp function', () => {
  describe('when calling it', () => {
    describe('And there is no error', () => {
      test('It should call dispatch', async () => {
        const dispatch = jest.fn();
        axios.post.mockResolvedValueOnce(
          {
            user: {}
          }
        );
        await signUp()(dispatch);
        expect(dispatch).toHaveBeenCalled();
      });
    });
    describe('and there is an error', () => {
      test('It should call dispatch', async () => {
        const dispatch = jest.fn();
        axios.post.mockRejectedValueOnce('error');
        try {
          await signUp()(dispatch);
        } catch (error) {
          expect(error).toBe('error');
        }
      });
    });
  });
});

describe('Given login function', () => {
  describe('When is invoked', () => {
    test('Then it should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.post.mockResolvedValueOnce({
        type: actionTypes.LOG_IN,
        user: { email: 'a@email.com', password: '123456' }
      });
      await logIn()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
  test('login should throw error', async () => {
    const dispatch = jest.fn();
    axios.post.mockRejectedValueOnce('error');
    try {
      await logIn()(dispatch);
    } catch (error) {
      expect(error).toBe('error');
    }
  });
});

describe('Given getUserData function', () => {
  describe('When is invoked', () => {
    test('Then it should call dispatch', async () => {
      const dispatch = jest.fn();
      axios.mockResolvedValueOnce({
        type: actionTypes.GET_USER_DATA,
        user: { token: '123456' }
      });
      await getUserData()(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
  test('getUserData should throw error', async () => {
    const dispatch = jest.fn();
    axios.mockRejectedValueOnce('error');
    try {
      await getUserData()(dispatch);
    } catch (error) {
      expect(error).toBe('error');
    }
  });
});
