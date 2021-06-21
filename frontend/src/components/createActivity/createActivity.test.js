/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CreateActivity from './index';
import { updateById } from '../../redux/actions/actionsCreators';
import { render, screen, fireEvent } from '../../utils/utils';

jest.mock('../../redux/actions/actionsCreators');

describe('Given a CreateActivity', () => {
  test('Should render', () => {
    updateById.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <CreateActivity />
      </MemoryRouter>,
      {
        initialState: {
          itemSelected: {
            activities: []
          }
        }
      }
    );
    const submitButton = screen.queryByTestId('submit-button');
    fireEvent.click(submitButton);
    const refreshButton = screen.queryByTestId('refresh-button');
    fireEvent.click(refreshButton);
  });
});
