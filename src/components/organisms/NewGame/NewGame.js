import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Title } from 'components/atoms/Title/Title';
import { StyledList, StyledListElement } from 'components/atoms/StyledList/StyledList';
import { Line } from 'components/atoms/Line/Line';
import { StyledParagraph } from 'components/atoms/StyledParagraph/StyledParagraph';
import winnerIMG from 'assets/img/cat_winner.jpg';
import { GameContext } from 'providers/GameProvider';

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

const NewGame = () => {
  const {
    gameState: { result, mistakes, moves, fullWord },
    startGame,
  } = useContext(GameContext);
  const fullWordString = fullWord.join('');

  return (
    <NewGamePanel>
      <Title>{result}</Title>
      <Image src={winnerIMG} />
      <Line />
      <Title>Statistics:</Title>
      <StyledList>
        <StyledListElement>Mistakes: {mistakes}</StyledListElement>
        <StyledListElement>Moves: {moves}</StyledListElement>
      </StyledList>
      <Title>Word:</Title>
      <StyledParagraph>{fullWordString}</StyledParagraph>
      <DefaultButton onClick={startGame}>Start new game</DefaultButton>
    </NewGamePanel>
  );
};

NewGame.propTypes = {
  result: PropTypes.string,
  mistakes: PropTypes.number,
  moves: PropTypes.number,
  fullWord: PropTypes.array,
  startGame: PropTypes.func,
};
export default NewGame;
