import React from 'react';
import FirstComponent from 'components/FirstComponent/FirstComponent';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <FirstComponent />
    </Wrapper>
  </ThemeProvider>
);
export default Root;
