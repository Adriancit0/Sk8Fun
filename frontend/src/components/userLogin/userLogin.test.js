/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import UserLogin from './index';
import { render, screen, fireEvent } from '../../utils/utils';
import { logIn } from '../../redux/actions/actionsCreators';

jest.mock('../../redux/actions/actionsCreators');

describe('UserLogin component', () => {
  describe('when clicking on login-button', () => {
    test('should render user-link', () => {
      logIn.mockReturnValueOnce({ type: '' });
      render(
        <MemoryRouter>
          <UserLogin />
        </MemoryRouter>
      );
      const loginButton = screen.getByTestId('standardButton');
      fireEvent.click(loginButton);
      expect(logIn).toHaveBeenCalled();
    });
  });
});

describe('UserLogin component', () => {
  describe('when clicking on login-button and role is user', () => {
    test('should render user-link', () => {
      logIn.mockReturnValueOnce({ type: '' });
      jest.mock('react-router-dom', () => ({
        ...jest.requireActual('react-router-dom'),
        useParams: () => ({
          role: 'user'
        })
      }));
      render(
        <MemoryRouter>
          <UserLogin />
        </MemoryRouter>
      );
      const loginButton = screen.getByTestId('standardButton');
      fireEvent.click(loginButton);
      expect(logIn).toHaveBeenCalled();
      const userLink = screen.getByTestId('login-confirm');
      expect(userLink).toBeInTheDocument();
    });
  });
});

// jest.mock('react-router-dom', () => ({
//     ...jest.requireActual('react-router-dom'),
//     useParams: () => ({
//       role: 'user'
//     })
//     useRouteMatch: () => ({ url: '/login/user' }),
//   }));
