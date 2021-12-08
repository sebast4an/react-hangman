import React from 'react';
import { render } from '@testing-library/react';
import { ThemeProvider } from 'styled-components';
import { theme } from 'assets/styles/theme';
import GameProvider from 'providers/GameProvider';

export const renderWithProviders = children => {
  return render(
    <ThemeProvider theme={theme}>
      <GameProvider>{children}</GameProvider>
    </ThemeProvider>
  );
};
