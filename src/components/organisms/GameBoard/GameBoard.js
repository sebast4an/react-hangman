import React, { useContext } from 'react';
import { Board } from './Gameboard.styles';
import GameRunning from '../GameRunning/GameRunning';
import NewGame from '../NewGame/NewGame';
import { GameContext } from 'providers/GameProvider';

const GameBoard = () => {
  const { gameState } = useContext(GameContext);

  const switchGame = state => {
    if (state) {
      return <GameRunning />;
    } else {
      return <NewGame />;
    }
  };

  return <Board>{switchGame(gameState.started)}</Board>;
};

export default GameBoard;
