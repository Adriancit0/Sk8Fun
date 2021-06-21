/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Header from './index';
import { render, screen } from '../../utils/utils';

describe('Given a Home component', () => {
  describe('When is invoked', () => {
    test('Should render', () => {
      render(
        <MemoryRouter>
          <Header />
        </MemoryRouter>
      );
      expect(screen.getByText(/Horarios de actividades de skate en Madrid/i)).toBeInTheDocument();
    });
  });
});
