import React, { useContext } from 'react';

import { Board } from './Gameboard.styles';
import GameRunning from '../GameRunning/GameRunning';
import NewGame from '../NewGame/NewGame';
import { GameContext } from 'providers/GameProvider';
import Loading from 'components/molecules/Loading/Loading';

const GameBoard = () => {
  const {
    gameState: { isLoaded, isStarted, fullWord },
  } = useContext(GameContext);

  const switchGame = (isLoaded, isStarted, fullWord) => {
    if (isLoaded && fullWord.length !== 0) {
      if (isStarted) return <GameRunning />;
      else return <NewGame />;
    } else {
      return <Loading />;
    }
  };

  return <Board>{switchGame(isLoaded, isStarted, fullWord)}</Board>;
};

export default GameBoard;
