import React, { useContext } from 'react';
import { Board } from './Gameboard.styles';
import GameRunning from '../GameRunning/GameRunning';
import NewGame from '../NewGame/NewGame';
import { GameContext } from 'providers/GameProvider';

const GameBoard = () => {
  const {
    gameState: { isLoaded, isStarted, fullWord },
  } = useContext(GameContext);

  const switchGame = (isLoaded, isStarted, fullWord) => {
    if (isLoaded && fullWord.length !== 0) {
      if (isStarted) return <GameRunning />;
      else return <NewGame />;
    } else {
      return 'Game is loading. Please wait...';
    }
  };

  return <Board>{switchGame(isLoaded, isStarted, fullWord)}</Board>;
};

export default GameBoard;
