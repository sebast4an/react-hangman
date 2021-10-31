import React from 'react';
import { Board, Hangman, Counters } from './Gameboard.styles';
import Keyboard from '../Keyboard/Keyboard';
import StagePictures from 'components/atoms/StagePictures/StagePictures';
import Words from 'components/molecules/Words/Words';

const GameBoard = () => {
  return (
    <Board>
      <Hangman>
        <Counters>
          <p>Attempts: 1/10</p>
          <p>Wrong: 1</p>
        </Counters>
      </Hangman>
      <StagePictures />
      <Words />
      <Keyboard />
    </Board>
  );
};

export default GameBoard;
