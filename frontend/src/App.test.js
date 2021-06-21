/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

global.scrollTo = jest.fn();
test('renders rights link', () => {
  render(<App />);
  const linkElement = screen.getByText(/FunnySk8/i);
  expect(linkElement).toBeInTheDocument();
});
