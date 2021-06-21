/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import CreateActivity from './index';
import InputSection from '../inputSection';
import { updateById } from '../../redux/actions/actionsCreators';
import { render, screen, fireEvent } from '../../utils/utils';

jest.mock('../../redux/actions/actionsCreators');

describe('Given a skateUser', () => {
  test('Should render SchoolList', () => {
    updateById.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <CreateActivity />
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
    const handleCreateActivity = jest.fn();
    render(
      <MemoryRouter>
        <CreateActivity>
          <InputSection functionName={handleCreateActivity} />
        </CreateActivity>
      </MemoryRouter>
    );
    expect(handleCreateActivity).toHaveBeenCalled();
  });
});
