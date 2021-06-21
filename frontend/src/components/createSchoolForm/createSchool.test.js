/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CreateSchoolForm from './index';
import { createItem } from '../../redux/actions/actionsCreators';
import { render, screen, fireEvent } from '../../utils/utils';

jest.mock('../../redux/actions/actionsCreators');
describe('Given a skateUser', () => {
  test('Should render SchoolList', () => {
    createItem.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <CreateSchoolForm />
      </MemoryRouter>,
      {
        initialState: {
          isCreated: false
        }
      }
    );

    const standardButton = screen.queryByTestId('standardButton');
    fireEvent.click(standardButton);
  });
  test('Should render section ', () => {
    render(
      <MemoryRouter>
        <CreateSchoolForm />
      </MemoryRouter>,
      {
        initialState: {
          isCreated: true
        }
      }
    );
  });
});
