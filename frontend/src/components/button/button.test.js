/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';
import { render, screen, fireEvent } from '../../utils/utils';

describe('Given a Header component', () => {
  describe('When is invoked', () => {
    describe('And dont have user login', () => {
      test('Should render', () => {
        render(
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        );
        const button = screen.queryByTestId('standardButton');
        fireEvent.click(button);
        expect(button).toBeInTheDocument();
      });
    });
  });
});
