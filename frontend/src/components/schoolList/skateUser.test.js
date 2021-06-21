/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import List from './index';
import { getAll } from '../../redux/actions/actionsCreators';
import { render, screen } from '../../utils/utils';
import actionsTypes from '../../redux/actions/actionsTypes';

jest.mock('../../redux/actions/actionsCreators');
describe('Given a skateUser', () => {
  test('Should render SchoolList', () => {
    getAll.mockReturnValueOnce({ type: actionsTypes.GET_ALL });
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
    render(
      <MemoryRouter>
        <List />
      </MemoryRouter>,
      {
        initialState: {
          schoolList: []
        }
      }

    );
    expect(getAll).toHaveBeenCalled();
  });
});
