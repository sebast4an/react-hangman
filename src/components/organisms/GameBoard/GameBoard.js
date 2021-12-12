import React, { useContext } from 'react';

import { GameContext } from 'providers/GameProvider';
import { Board } from './Gameboard.styles';

import GameRunning from '../GameRunning/GameRunning';
import GameResult from '../GameResult/GameResult';
import Loading from 'components/molecules/Loading/Loading';

const GameBoard = () => {
  const {
    gameState: { isLoaded, isStarted, fullWord },
  } = useContext(GameContext);

  const switchGame = (isLoaded, isStarted, fullWord) => {
    if (isLoaded && fullWord.length !== 0) {
      if (isStarted) return <GameRunning />;
      else return <GameResult />;
    } else {
      return <Loading />;
    }
  };

  return <Board>{switchGame(isLoaded, isStarted, fullWord)}</Board>;
};

export default GameBoard;
