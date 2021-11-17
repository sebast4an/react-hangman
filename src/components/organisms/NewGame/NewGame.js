import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { Title } from 'components/atoms/Title/Title';
import { StyledList, StyledListElement } from 'components/atoms/StyledList/StyledList';
import { Line } from 'components/atoms/Line/Line';
import { StyledParagraph } from 'components/atoms/StyledParagraph/StyledParagraph';
import winnerIMG from 'assets/img/cat_winner.jpg';
import { GameContext } from 'providers/GameProvider';
import { NewGamePanel, Image, DefaultButton } from './NewGame.styles';

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
