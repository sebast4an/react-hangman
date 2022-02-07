import React, { useContext } from 'react';

import Keyboard from 'components/molecules/Keyboard/Keyboard';
import Words from 'components/molecules/Words/Words';
import StagePictures from 'components/molecules/StagePictures/StagePictures';
import { GameContext } from 'providers/GameProvider';
import { Counters, Hangman, ButtonsWrapper } from './GameRunning.styles';
import { Button } from 'components/atoms/Button/Button';
import Widget from 'components/molecules/Widget/Widget';

const GameRunning = () => {
  const {
    startGame,
    solveGame,
    gameState: { mistakes, moves, hiddenWord },
  } = useContext(GameContext);

  const startNewGame = () => {
    localStorage.clear();
    startGame();
  };

  return (
    <>
      <Hangman>
        <Counters>
          <p>Mistakes: {mistakes} / 14</p>
          <p>Moves: {moves} </p>
        </Counters>
      </Hangman>
      <StagePictures />
      <Words>{hiddenWord}</Words>
      <Keyboard />
      <ButtonsWrapper>
        <Button onClick={solveGame}>Solve the puzzle</Button>
        <Button onClick={startNewGame}>Restart the game</Button>
      </ButtonsWrapper>
      <Widget />
    </>
  );
};

export default GameRunning;
