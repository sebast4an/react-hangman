import React, { useEffect, useState } from 'react';
import { Board, Hangman, Counters } from './Gameboard.styles';
import Keyboard from '../../molecules/Keyboard/Keyboard';
import StagePictures from 'components/atoms/StagePictures/StagePictures';
import Words from 'components/molecules/Words/Words';

const words = ['github', 'sebastian'];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const GameBoard = () => {
  const [gameState, setGameState] = useState('');

  const startGame = () => {
    const number = randomNumber(0, words.length - 1);
    const fullWord = [...words[number]];
    const hiddenWord = new Array(fullWord.length);
    hiddenWord.fill('_', 0);

    setGameState({
      fullWord,
      hiddenWord,
      mistakes: 0,
      moves: 0,
    });
  };

  const handleButtons = e => {
    const fullWordState = gameState.fullWord;
    const clikedButton = e.target;
    const clikedButtonValue = clikedButton.innerText.toLowerCase();

    if (fullWordState.indexOf(clikedButtonValue) > -1) {
      clikedButton.setAttribute('disabled', '');

      const copyHiddenState = [...gameState.hiddenWord];
      const lettersIndex = fullWordState.flatMap((searched, index) => (searched === clikedButtonValue ? index : []));
      lettersIndex.forEach(number => (copyHiddenState[number] = clikedButtonValue));

      setGameState({
        ...gameState,
        hiddenWord: copyHiddenState,
        moves: gameState.moves + 1,
      });
    } else {
      setGameState({
        ...gameState,
        mistakes: gameState.mistakes + 1,
        moves: gameState.moves + 1,
      });
    }
  };

  useEffect(() => {
    startGame();
  }, []);

  return (
    <Board>
      <Hangman>
        <Counters>
          <p>Mistakes: {gameState.mistakes} / 10</p>
          <p>Moves: {gameState.moves} </p>
        </Counters>
      </Hangman>
      <StagePictures numberstage={gameState.mistakes} />
      <Words>{gameState.hiddenWord}</Words>
      <Keyboard handleButtons={handleButtons} />
    </Board>
  );
};

export default GameBoard;
