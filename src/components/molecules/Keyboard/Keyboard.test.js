import React from 'react';
import { screen } from '@testing-library/react';
import { renderWithProviders } from 'helpers/renderWithProviders';
import Keyboard from './Keyboard';

describe('Keyboard', () => {
  it('Renders the compontents', () => {
    renderWithProviders(Keyboard);
  });
});
