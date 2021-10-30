import React from 'react';
import { Board, Hangman, Counters, Image, Word } from './Gameboard.styles';
import Keyboard from '../Keyboard/Keyboard';

const GameBoard = () => {
  return (
    <Board>
      <Hangman>
        <Counters>
          <p>Attempts: 1/10</p>
          <p>Wrong: 1</p>
        </Counters>
      </Hangman>
      <Image />
      <Word>se__s__a_</Word>
      <Keyboard />
    </Board>
  );
};

export default GameBoard;
