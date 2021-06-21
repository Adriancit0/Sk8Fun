/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import SignUpComponent from './index';
import { render, screen, fireEvent } from '../../utils/utils';
import { signUp } from '../../redux/actions/actionsCreators';

jest.mock('../../redux/actions/actionsCreators');

describe('UserLogin component', () => {
  describe('when render', () => {
    test('should render SignUpComponent', () => {
      signUp.mockReturnValueOnce({ type: '' });
      render(
        <MemoryRouter>
          <SignUpComponent />
        </MemoryRouter>
      );
      const loginButton = screen.getByTestId('standardButton');
      fireEvent.click(loginButton);
      expect(signUp).toHaveBeenCalled();
    });
  });
});
