import { StyledList, StyledListElement } from 'components/atoms/StyledList/StyledList';
import { StyledParagraph } from 'components/atoms/StyledParagraph/StyledParagraph';
import { Title } from 'components/atoms/Title/Title';
import React from 'react';

const StartPage = () => (
  <>
    <Title>Hi! 👋</Title>
    <StyledParagraph>It is Game build in React, all words are fetch from API.</StyledParagraph>
    <Title>Rules: </Title>
    <StyledParagraph>You have 10 tries</StyledParagraph>
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
