import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Game from 'views/Game';
import MainPage from 'views/MainPage';
import GameProvider from 'providers/GameProvider';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Router>
        <MainTemplate>
          <GameProvider>
            <Routes>
              <Route path={process.env.REACT_APP_PUBLIC_URL + '/game'} element={<Game />} />
              <Route path={process.env.REACT_APP_PUBLIC_URL + '/'} element={<MainPage />} />
            </Routes>
          </GameProvider>
        </MainTemplate>
      </Router>
    </Wrapper>
  </ThemeProvider>
);
export default Root;
