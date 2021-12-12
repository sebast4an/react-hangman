import React from 'react';
import '@testing-library/jest-dom';
import { fireEvent, screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import GameRunning from './GameRunning';

describe('GameRunning', () => {
  it('Renders running game component', () => {
    renderWithProviders(<GameRunning />);
  });

  it('Checks game is started', () => {
    renderWithProviders(<GameRunning />);
    const button = screen.getByText(/a/i);
    fireEvent.click(button);
    expect(button).toBeDisabled();
  });
});
