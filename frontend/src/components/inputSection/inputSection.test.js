/* eslint-disable react/jsx-filename-extension */
import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import InputSection from './index';
import { render, screen, fireEvent } from '../../utils/utils';

describe('Given a Header component', () => {
  describe('When is invoked', () => {
    describe('And dont have user login', () => {
      test('Should render', () => {
        render(
          <MemoryRouter>
            <InputSection
              className="input-section__input"
              type="text"
              id="id"
              value="newValue"
              functionName={jest.fn()}
              testid="input"
            />
          </MemoryRouter>
        );
        const input = screen.queryByTestId('input');
        fireEvent.change(input, { target: { value: 'newValue' } });
      });
    });
  });
});
