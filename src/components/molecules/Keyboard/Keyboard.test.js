import React from 'react';
import '@testing-library/jest-dom';
import { screen, fireEvent } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import Keyboard from './Keyboard';

describe('Keyboard', () => {
  it('Checks keyboard buttons are disabled when is clicked', () => {
    renderWithProviders(<Keyboard />);
    const button = screen.getByText(/a/i);
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });
});
