/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import List from './index';
import { getAll, getUserData } from '../../redux/actions/actionsCreators';
import { render, screen } from '../../utils/utils';

jest.mock('../../redux/actions/actionsCreators');
describe('Given a skateUser', () => {
  test('Should render SchoolList', () => {
    getAll.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
      {
        initialState: {
          schoolList: [{ name: 'new school', id: '1' }]
        }
      }
    );
    expect(screen.getByText(/SCHOOL LIST/i)).toBeInTheDocument();
  });
  test('Should call getAll', () => {
    getAll.mockReturnValueOnce({ type: '' });
    getUserData.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
      {
        initialState: {
          user: {
            user:
            { token: 'token' },
            role: 'school'
          }
        }
      }

    );
    expect(getUserData).toHaveBeenCalled();
  });
  test('Should call getAll', () => {
    getAll.mockReturnValueOnce({ type: '' });
    getUserData.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
      {
        initialState: {
          user: {
            user:
            { token: 'token' }
          }
        }
      }

    );
    expect(getAll).toHaveBeenCalled();
  });
});
