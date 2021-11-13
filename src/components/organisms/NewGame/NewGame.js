import React from 'react';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { StyledList, StyledListElement } from 'components/atoms/StyledList/StyledList';
import { Line } from 'components/atoms/Line/Line';
import { StyledParagraph } from 'components/atoms/StyledParagraph/StyledParagraph';
import winnerIMG from 'assets/img/cat_winner.jpg';

export const NewGamePanel = styled.div`
  width: 100%;
`;

export const DefaultButton = styled.button`
  position: relative;
  border: 0;
  font-size: ${({ theme }) => theme.fontSize.xs};
  background-color: ${({ theme }) => theme.colors.lightBlack};
  border: 2px solid ${({ theme }) => theme.colors.lightBlack};
  color: ${({ theme }) => theme.colors.grey};
  margin: 10px 0;
  padding: 10px 20px;
  border-radius: 10px;
  transition: transform 0.3s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
  }

  &:focus-visible {
    outline: 0;
    border: 2px solid ${({ theme }) => theme.colors.white};
  }
`;

export const Image = styled.img`
  max-width: 200px;
  height: auto;
  margin: 10px 0;
  border-radius: 10px;
  display: flex;
`;

const NewGame = ({ game, gameState, startGame }) => (
  <NewGamePanel>
    <Title>{game.result}</Title>
    <Image src={winnerIMG} />
    <Line />
    <Title>Statistics:</Title>
    <StyledList>
      <StyledListElement>Mistakes: {gameState.mistakes}</StyledListElement>
      <StyledListElement>Moves: {gameState.moves}</StyledListElement>
    </StyledList>
    <Title>Word:</Title>
    <StyledParagraph>{gameState.fullWord}</StyledParagraph>
    <DefaultButton onClick={startGame}>Start new game</DefaultButton>
  </NewGamePanel>
);

export default NewGame;
