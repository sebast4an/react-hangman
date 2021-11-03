import React, { useEffect, useState } from 'react';
import { Board, Hangman, Counters } from './Gameboard.styles';
import Keyboard from '../../molecules/Keyboard/Keyboard';
import StagePictures from 'components/atoms/StagePictures/StagePictures';
import Words from 'components/molecules/Words/Words';

const words = ['github'];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const GameBoard = () => {
  const [quessWord, setQuessWord] = useState([]);
  const [hiddenWord, setHiddenWord] = useState([]);
  const [counter, setCounter] = useState(0);
  const [wrong, setWrong] = useState(0);

  const startGame = () => {
    const number = randomNumber(0, words.length - 1);
    const theWord = [...words[number]];
    const hidden = new Array(theWord.length);
    hidden.fill('_', 0);
    setQuessWord(theWord);
    setHiddenWord(hidden);
    setCounter(0);
    setWrong(0);
  };

  const handleSolution = e => {
    const clikedButton = e.target;
    const clikedValue = clikedButton.innerText.toLowerCase();
    setCounter(counter + 1);

    if (quessWord.indexOf(clikedValue) !== -1) {
      clikedButton.setAttribute('disabled', '');
      const occurrenceTable = quessWord.flatMap((searched, index) => (searched === clikedValue ? index : []));
      const copyState = [...hiddenWord];
      occurrenceTable.forEach(number => (copyState[number] = clikedValue));
      setHiddenWord(copyState);
    } else setWrong(wrong + 1);
  };

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (quessWord.join('') === hiddenWord.join('') && quessWord.length !== 0) console.log('done!');
    if (counter === 10) {
      console.log('GAMEOVER');
      startGame();
    }
  }, [hiddenWord, quessWord, counter]);

  return (
    <Board>
      <Hangman>
        <Counters>
          <p>Attempts: {counter} / 10</p>
          <p>Wrong: {wrong}</p>
        </Counters>
      </Hangman>
      <StagePictures />
      <Words>{hiddenWord}</Words>
      <Keyboard quessWord={quessWord} handleSolution={handleSolution} />
      <button onClick={startGame}>New game?</button>
    </Board>
  );
};

export default GameBoard;
