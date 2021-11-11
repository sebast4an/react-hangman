import React, { useEffect, useState } from 'react';
import { Board } from './Gameboard.styles';
import GameRunning from '../GameRunning/GameRunning';
import NewGame from '../NewGame/NewGame';
import { checkInLocalStorage } from 'helpers/localStorage';
import { randomNumber } from 'helpers/general';

const words = ['github', 'sebastian'];

const initialState = {
  fullWord: [],
  hiddenWord: [],
  mistakes: 0,
  moves: 0,
};

const initialGame = {
  started: false,
  result: '',
};

const GameBoard = () => {
  const [gameState, setGameState] = useState(initialState);
  const [game, setGame] = useState(initialGame);

  const startGame = () => {
    const number = randomNumber(words.length - 1);
    const fullWord = [...words[number]];
    const hiddenWord = new Array(fullWord.length);
    hiddenWord.fill('_', 0);

    setGameState({
      fullWord,
      hiddenWord,
      mistakes: 0,
      moves: 0,
    });

    setGame({
      started: true,
      result: '',
    });
  };

  const checkCliked = (fullWordState, clikedButton, clikedButtonValue) => {
    if (fullWordState.indexOf(clikedButtonValue) > -1) {
      clikedButton.setAttribute('disabled', '');

      const copyHiddenWord = [...gameState.hiddenWord];
      const lettersIndex = fullWordState.flatMap((searched, index) => (searched === clikedButtonValue ? index : []));
      lettersIndex.forEach(number => (copyHiddenWord[number] = clikedButtonValue));

      setGameState({
        ...gameState,
        hiddenWord: copyHiddenWord,
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

  const handleButtons = e => {
    const fullWordState = gameState.fullWord;
    const clikedButton = e.target;
    const clikedButtonValue = clikedButton.innerText.toLowerCase();

    checkCliked(fullWordState, clikedButton, clikedButtonValue);
  };

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    const fullWord = gameState.fullWord.join('');
    const hiddenWord = gameState.hiddenWord.join('');
    const moves = gameState.moves;

    if (moves > 0) {
      if (fullWord === hiddenWord) {
        setGame({
          started: false,
          result: 'You Win!',
        });
      }
      if (gameState.mistakes === 14) {
        setGame({
          started: false,
          result: 'You Lost!',
        });
      }
    }
  }, [gameState]);

  checkInLocalStorage('testowy');

  const switchGame = state => {
    if (state) {
      return <GameRunning gameState={gameState} handleButtons={handleButtons} />;
    } else {
      return <NewGame game={game} gameState={gameState} startGame={startGame} />;
    }
  };

  return <Board>{switchGame(game.started)}</Board>;
};

export default GameBoard;
