import React, { useState, useEffect } from 'react';
import { randomNumber } from 'helpers/general';
import { loadFromLocalStorage, saveInLocalStorage } from 'helpers/localStorage';

//TODO: Makes fetch data from API (graphQL)!
const words = ['github', 'sebastian'];

export const GameContext = React.createContext({
  startGame: () => {},
  checkCliked: () => {},
  handleClikedButtons: () => {},
  solveGame: () => {},
  gameState: {},
});

const initialState = {
  fullWord: [],
  hiddenWord: [],
  mistakes: 0,
  moves: 0,
  started: false,
  result: 0,
};

const GameProvider = ({ children }) => {
  const [gameState, setGameState] = useState(initialState);

  const startGame = () => {
    const number = randomNumber(words.length - 1);
    const fullWord = [...words[number]];
    const hiddenWord = new Array(fullWord.length);
    hiddenWord.fill('_', 0);

    const checkLocalStorage = () => {
      const data = loadFromLocalStorage('gameState');

      if (data && data.result === 0) {
        setGameState(data);
      } else {
        setGameState({
          fullWord,
          hiddenWord,
          mistakes: 0,
          moves: 0,
          started: true,
          result: 0,
        });
      }
    };

    checkLocalStorage();
  };

  const checkCliked = (fullWordState, clikedButton, clikedButtonValue) => {
    clikedButton.disabled = true;

    if (fullWordState.indexOf(clikedButtonValue) > -1) {
      const quessedLetters = [...gameState.hiddenWord];
      const lettersIndex = fullWordState.flatMap((searched, index) => (searched === clikedButtonValue ? index : []));
      lettersIndex.forEach(number => (quessedLetters[number] = clikedButtonValue));

      setGameState({
        ...gameState,
        hiddenWord: quessedLetters,
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

  const handleClikedButtons = e => {
    const fullWordState = gameState.fullWord;
    const clikedButton = e.target;
    const clikedButtonValue = clikedButton.innerText.toLowerCase();

    checkCliked(fullWordState, clikedButton, clikedButtonValue);
  };

  const solveGame = () => {
    setGameState({
      ...gameState,
      hiddenWord: gameState.fullWord,
      started: false,
      result: 'Are you giving up?',
    });
    localStorage.clear();
  };

  useEffect(() => {
    startGame();
  }, []);

  useEffect(() => {
    if (gameState.started) {
      const fullWord = gameState.fullWord.join('');
      const hiddenWord = gameState.hiddenWord.join('');

      saveInLocalStorage('gameState', gameState);

      if (fullWord === hiddenWord) {
        setGameState({
          ...gameState,
          started: false,
          result: 'You Win!',
        });
        localStorage.clear();
      }
      if (gameState.mistakes === 14) {
        setGameState({
          ...gameState,
          started: false,
          result: 'You Lost!',
        });
        localStorage.clear();
      }
    }
  }, [gameState]);

  return (
    <>
      <GameContext.Provider
        value={{
          startGame,
          checkCliked,
          handleClikedButtons,
          solveGame,
          gameState,
        }}
      >
        {children}
      </GameContext.Provider>
    </>
  );
};

export default GameProvider;
