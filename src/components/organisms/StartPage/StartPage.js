import { StyledList, StyledListElement } from 'components/atoms/StyledList/StyledList';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import { StyledLink } from './StartPage.style';
import Widget from 'components/molecules/Widget/Widget';

const StartPage = () => (
  <>
    <Title>Hi! 👋</Title>
    <Paragraph>It is Game build in React, all words are fetch from API. Game state is saved in your brower.</Paragraph>
    <StyledLink to="/game">Start Game!</StyledLink>
    <Title>About the game:</Title>
    <Paragraph>You have 14 tries. The game gets new words from the API (SpaceX). All words is in english and about SpaceX.</Paragraph>
    <Title>Technologies used to build this game:</Title>
    <StyledList>
      <StyledListElement>React with React Router and React Context</StyledListElement>
      <StyledListElement>Styled Components</StyledListElement>
      <StyledListElement>Jest & React Testing Libary</StyledListElement>
      <StyledListElement>ESlint & Prettier</StyledListElement>
      <StyledListElement>Husky & Lint-staged</StyledListElement>
      <StyledListElement>Default imports</StyledListElement>
    </StyledList>
    <Widget />
  </>
);

export default StartPage;
