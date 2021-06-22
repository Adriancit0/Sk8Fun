/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import List from './index';
import { getAll, getUserData } from '../../redux/actions/actionsCreators';
import { render, screen, fireEvent } from '../../utils/utils';

global.scrollTo = jest.fn();
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
            token: 'token'
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
            { token: 'token' },
            role: 'school'
          }
        }
      }

    );
    expect(getAll).toHaveBeenCalled();
  });
  test('Should call getAll', () => {
    getAll.mockReturnValueOnce({ type: '' });
    getUserData.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <List />
        <input
          data-id="search-input"
          onChange={jest.fn(
            { value: 'value' }
          )}
        />
      </MemoryRouter>,
      {
        initialState: {
          schoolList: [
            {
              info: { name: 'name' }
            }
          ],
          user: {
            user:
            { token: 'token' },
            role: 'school'
          }
        }
      }
    );
    const searchInput = screen.queryByTestId('search-input');
    fireEvent.change(searchInput, { target: { value: 'newValue' } });
  });
});
