import React, { useState, useEffect } from 'react';
import { randomNumber } from 'helpers/general';
import { loadFromLocalStorage, removeInLocalStorage, saveInLocalStorage } from 'helpers/localStorage';

const words = ['github', 'sebastian'];

export const GameContext = React.createContext({
  startGame: () => {},
  checkCliked: () => {},
  handleButtons: () => {},
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
        console.log('load success!');
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
        removeInLocalStorage('gameState');
        removeInLocalStorage('disabledButtons');
      }
      if (gameState.mistakes === 14) {
        setGameState({
          ...gameState,
          started: false,
          result: 'You Lost!',
        });
        removeInLocalStorage('gameState');
        removeInLocalStorage('disabledButtons');
      }
    }
  }, [gameState]);

  return (
    <>
      <GameContext.Provider
        value={{
          startGame,
          checkCliked,
          handleButtons,
          gameState,
        }}
      >
        {children}
      </GameContext.Provider>
    </>
  );
};

export default GameProvider;
