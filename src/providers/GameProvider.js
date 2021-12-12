import React, { useState, useEffect } from 'react';
import { searchAndReturnInstances, randomNumber } from 'helpers/general';
import { loadFromLocalStorage, saveInLocalStorage } from 'helpers/localStorage';
import { spacexAPI } from 'helpers/api';
import offlineData from 'assets/offlineData.json';

export const GameContext = React.createContext({
  startGame: () => {},
  handleClikedButtons: () => {},
  solveGame: () => {},
  gameState: {},
});

const initialState = {
  isLoaded: false,
  isStarted: false,
  fullWord: [],
  hiddenWord: [],
  mistakes: 0,
  moves: 0,
  result: 0,
};

const GameProvider = ({ children }) => {
  const [dataState, setDataState] = useState([]);
  const [gameState, setGameState] = useState(initialState);

  const returnRandomWord = () => {
    const category = randomNumber(dataState.length - 1);
    const wordNumber = randomNumber(dataState[category].length - 1);
    const { name: word } = dataState[category][wordNumber];

    const fullWord = [...word.toLowerCase()];
    const hiddenWord = new Array(fullWord.length).fill('_', 0);
    const space = ' ';

    //find all spaces in the text and add to hidden word
    if (fullWord.indexOf(space) > -1) {
      const spaceTable = searchAndReturnInstances(fullWord, space);
      spaceTable.forEach(spaceNumber => (hiddenWord[spaceNumber] = space));
    }

    return { fullWord, hiddenWord };
  };

  const startGame = () => {
    const localData = loadFromLocalStorage('gameState');

    if (localData && localData.result === 0) setGameState(localData);
    else {
      const { fullWord, hiddenWord } = returnRandomWord();

      setGameState({
        ...initialState,
        isStarted: true,
        isLoaded: true,
        fullWord,
        hiddenWord,
      });
    }
  };

  const checkClikedButtonValue = (fullWord, button, buttonValue) => {
    button.disabled = true;

    if (fullWord.indexOf(buttonValue) > -1) {
      const quessedLetters = [...gameState.hiddenWord];
      const lettersIndex = searchAndReturnInstances(fullWord, buttonValue);
      lettersIndex.forEach(number => (quessedLetters[number] = buttonValue));

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
    const fullWord = gameState.fullWord;
    const clikedButton = e.target;
    const clikedButtonValue = clikedButton.innerHTML;

    checkClikedButtonValue(fullWord, clikedButton, clikedButtonValue);
  };

  const solveGame = () => {
    setGameState({
      ...gameState,
      hiddenWord: gameState.fullWord,
      isStarted: false,
      result: 1,
    });
    localStorage.clear();
  };

  useEffect(() => {
    if (dataState.length === 0) {
      spacexAPI()
        .then(
          ({
            data: {
              data: { rockets, ships, missions, launchpads },
            },
          }) => {
            setDataState([rockets, ships, missions, launchpads]);
            setGameState({ ...gameState, isLoaded: true });
          }
        )
        .catch(error => {
          alert(`Currently, I can't fetch data from SpaceX api. Maybe you don't have connection to internet? I load alternative data. 
          
          ${error}`);
          const { rockets } = offlineData;
          setDataState([rockets]);
          setGameState({ ...gameState, isLoaded: true });
        });
    }
  }, [dataState, gameState]);

  useEffect(() => {
    if (gameState.isLoaded) {
      startGame();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [gameState.isLoaded]);

  useEffect(() => {
    if (gameState.isStarted) {
      const fullWord = gameState.fullWord.join('');
      const hiddenWord = gameState.hiddenWord.join('');

      saveInLocalStorage('gameState', gameState);

      if (fullWord === hiddenWord) {
        setGameState({
          ...gameState,
          isStarted: false,
          result: 2,
        });
        localStorage.clear();
      }
      if (gameState.mistakes === 14) {
        setGameState({
          ...gameState,
          isStarted: false,
          result: 3,
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
