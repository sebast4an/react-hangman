import { StyledList, StyledListElement } from 'components/atoms/StyledList/StyledList';
import { StyledParagraph } from 'components/atoms/StyledParagraph/StyledParagraph';
import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  color: ${({ theme }) => theme.colors.white};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  margin: 30px 0;
`;

const StartPage = () => (
  <>
    <Title>Hi! 👋</Title>
    <StyledParagraph>It is Game build in React, all words are fetch from API.</StyledParagraph>
    <StyledLink to="/game">Start Game!</StyledLink>
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
