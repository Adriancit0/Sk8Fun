/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import Footer from './index';
import { render, screen } from '../../utils/utils';

describe('Given a Footer component', () => {
  test('Should render', () => {
    render(
      <MemoryRouter>
        <Footer />
      </MemoryRouter>
    );
    expect(screen.getByText(/FunnySk8/i)).toBeInTheDocument();
  });
});
