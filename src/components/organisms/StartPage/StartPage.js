import { Line } from 'components/atoms/Line/Line';
import { StyledList, StyledListElement } from 'components/atoms/StyledList/StyledList';
import { StyledParagraph } from 'components/atoms/StyledParagraph/StyledParagraph';
import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import { StyledLink } from './StartPage.style';

const StartPage = () => (
  <>
    <Title>Hi! 👋</Title>
    <StyledParagraph>It is Game build in React, all words are fetch from API.</StyledParagraph>
    <StyledLink to="/game">Start Game! 🎮</StyledLink>
    <Line />
    <Title>About the game:</Title>
    <StyledParagraph>
      You have 14 tries. The game gets new words from the API dictionary. All words is in english and about IT and (of course 😼) cats.
    </StyledParagraph>
    <Title>Technologies used to build this game:</Title>
    <StyledList>
      <StyledListElement>React with React Router and React Context</StyledListElement>
      <StyledListElement>Styled Components</StyledListElement>
      <StyledListElement>Jest & React Testing Libary</StyledListElement>
      <StyledListElement>ESlint & Prettier</StyledListElement>
      <StyledListElement>Husky & Lint-staged</StyledListElement>
      <StyledListElement>Default imports</StyledListElement>
    </StyledList>
  </>
);

export default StartPage;
