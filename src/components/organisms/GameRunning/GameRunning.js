import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Keyboard from 'components/molecules/Keyboard/Keyboard';
import Words from 'components/molecules/Words/Words';
import StagePictures from 'components/molecules/StagePictures/StagePictures';
import { GameContext } from 'providers/GameProvider';
import { Counters, Hangman } from './GameRunning.styles';

const GameRunning = () => {
  const {
    gameState: { mistakes, moves, hiddenWord },
  } = useContext(GameContext);

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
    </>
  );
};

GameRunning.propTypes = {
  mistakes: PropTypes.number,
  moves: PropTypes.number,
  hiddenWord: PropTypes.array,
};
export default GameRunning;
