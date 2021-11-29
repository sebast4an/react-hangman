import React, { useContext, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Title } from 'components/atoms/Title/Title';
import { StyledList, StyledListElement } from 'components/atoms/StyledList/StyledList';
import { Line } from 'components/atoms/Line/Line';
import { Paragraph } from 'components/atoms/Paragraph/Paragraph';
import { GameContext } from 'providers/GameProvider';
import { NewGamePanel, Image, DefaultButton } from './NewGame.styles';
import { catsAPI } from 'helpers/api';

const NewGame = () => {
  const [picture, setPicture] = useState();
  const {
    gameState: { result, mistakes, moves, fullWord },
    startGame,
  } = useContext(GameContext);

  const fullWordString = fullWord.join('');

  const returnResult = () => {
    switch (result) {
      case 1:
        return `Are you giving up?`;
      case 2:
        return `You Win!`;
      case 3:
        return 'You Lost!';
      default:
        return `What's happened ?`;
    }
  };

  useEffect(() => {
    catsAPI(result).then(({ data }) => {
      const [allData] = data;
      setPicture(allData.url);
    });
  }, [result]);

  return (
    <NewGamePanel>
      <Title>{returnResult()}</Title>
      <Image src={picture} />
      <Line />
      <Title>Statistics:</Title>
      <StyledList>
        <StyledListElement>Mistakes: {mistakes}</StyledListElement>
        <StyledListElement>Moves: {moves}</StyledListElement>
      </StyledList>
      <Title>Word:</Title>
      <Paragraph>{fullWordString}</Paragraph>
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
