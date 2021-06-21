/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Detail from './index';
import { render, screen, fireEvent } from '../../utils/utils';
import { getById, deleteById } from '../../redux/actions/actionsCreators';

jest.mock('../../redux/actions/actionsCreators');

describe('Given schoolDetails component', () => {
  test('Should render Detail', () => {
    getById.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
      {
        initialState: {
          itemSelected: {}
        }
      }
    );
    expect(screen.getByText(/Contact/i)).toBeInTheDocument();
  });
});

describe('Given schoolDetails component', () => {
  test('Should render Detail', () => {
    getById.mockReturnValueOnce({ type: '' });

    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
      {
        initialState: {
          itemSelected: {}
        }
      }
    );
    expect(getById).toHaveBeenCalled();
  });
});

describe('Given schoolDetails component', () => {
  test('Should render Detail', () => {
    getById.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
      {
        initialState: {
          itemSelected: { activities: [{ description: 'clases' }] }
        }
      }
    );
    expect(getById).toHaveBeenCalled();
  });
});

describe('Given schoolDetails component', () => {
  test('Should render Detail', () => {
    getById.mockReturnValueOnce({ type: '' });
    deleteById.mockReturnValueOnce({ type: '' });
    render(
      <MemoryRouter>
        <Detail />
      </MemoryRouter>,
      {
        initialState: {
          itemSelected: {
            info: {
              createdBy: 'id'
            },
            activities: [{ description: 'clases' }]
          },
          user: {
            user: {
              _id: 'id',
              role: 'school'
            }
          }
        }
      }
    );
    const submitButton = screen.queryByTestId('detail-submit-button');
    fireEvent.click(submitButton);
  });
});
