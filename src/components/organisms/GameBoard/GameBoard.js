import React, { useEffect, useState } from 'react';
import { Board, Hangman, Counters } from './Gameboard.styles';
import Keyboard from '../../molecules/Keyboard/Keyboard';
import StagePictures from 'components/atoms/StagePictures/StagePictures';
import Words from 'components/molecules/Words/Words';

const words = ['sebastian', 'github', 'javascript'];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const GameBoard = () => {
  const [quessWord, setQuessWord] = useState();
  const [hiddenWord, setHiddenWord] = useState();
  console.log(quessWord);
  console.log(hiddenWord);

  const startGame = () => {
    const number = randomNumber(0, words.length - 1);
    const theWord = [...words[number]];
    const hidden = new Array(theWord.length);
    hidden.fill('_', 0);
    setQuessWord(theWord);
    setHiddenWord(hidden);
  };

  const handleSolution = e => {
    const clikedButton = e.target;
    const clikedValue = clikedButton.innerText.toLowerCase();

    if (quessWord.indexOf(clikedValue) !== -1) {
      clikedButton.setAttribute('disabled', '');
      const occurrenceTable = quessWord.flatMap((searched, index) => (searched === clikedValue ? index : []));
      const copyState = [...hiddenWord];
      occurrenceTable.forEach(number => {
        copyState[number] = clikedValue;
      });
      setHiddenWord(copyState);
    } else console.log('nie znaleziony Panie generale');
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <Board>
      <Hangman>
        <Counters>
          <p>Attempts: 1/10</p>
          <p>Wrong: 1</p>
        </Counters>
      </Hangman>
      <StagePictures />
      <Words>{hiddenWord}</Words>
      <Keyboard quessWord={quessWord} handleSolution={handleSolution} />
    </Board>
  );
};

export default GameBoard;
