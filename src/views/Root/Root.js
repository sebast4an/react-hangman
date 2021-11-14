import React from 'react';
import { ThemeProvider } from 'styled-components';
import { GlobalStyle } from 'assets/styles/GlobalStyle';
import { theme } from 'assets/styles/theme';
import { Wrapper } from './Root.styles';
import MainTemplate from 'components/templates/MainTemplate';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Game from 'views/Game';
import MainPage from 'views/MainPage';
import GameProvider from 'providers/GameProvider';

const Root = () => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Wrapper>
      <Router>
        <MainTemplate>
          <Switch>
            <Route path="/game">
              <GameProvider>
                <Game />
              </GameProvider>
            </Route>
            <Route path="/">
              <MainPage />
            </Route>
          </Switch>
        </MainTemplate>
      </Router>
    </Wrapper>
  </ThemeProvider>
);
export default Root;
