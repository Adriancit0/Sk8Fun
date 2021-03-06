/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';
import { render, screen } from '../../utils/utils';

describe('Given a Header component', () => {
  describe('When is invoked', () => {
    describe('And dont have user login', () => {
      test('Should render', () => {
        render(
          <MemoryRouter>
            <Header />
          </MemoryRouter>
        );
        expect(screen.getByText(/FunnySk8/i)).toBeInTheDocument();
      });
    });
  });
});

describe('Given a Header component', () => {
  describe('When is invoked', () => {
    describe('And have user login', () => {
      test('Should render', () => {
        render(
          <MemoryRouter>
            <Header />
          </MemoryRouter>,
          {
            initialState: {
              user: {
                token: 'token'
              }
            }
          }
        );
        expect(screen.getByText(/LogOut/i)).toBeInTheDocument();
      });
    });
  });
});
