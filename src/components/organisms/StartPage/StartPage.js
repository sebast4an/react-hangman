import { Line } from 'components/atoms/Line/Line';
import { StyledList, StyledListElement } from 'components/atoms/StyledList/StyledList';
import { StyledParagraph } from 'components/atoms/StyledParagraph/StyledParagraph';
import { Title } from 'components/atoms/Title/Title';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledLink = styled(Link)`
  display: block;
  background-color: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  margin: 30px 0;
  max-width: max-content;
  padding: 1rem;
  border-radius: 10px;
  transition: background 0.3s ease, color 0.2s ease;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightBlack};
    color: ${({ theme }) => theme.colors.grey};
  }

  &:focus-visible {
    outline: 3px solid ${({ theme }) => theme.colors.grey};
  }
`;

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
