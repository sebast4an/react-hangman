import React, { useState, useEffect } from 'react';
import { searchAndReturnInstances, randomNumber } from 'helpers/general';
import { loadFromLocalStorage, saveInLocalStorage } from 'helpers/localStorage';
import { getDataFromSpaceXapi } from 'helpers/api';
import offlineData from 'assets/alternativeData.json';

export const GameContext = React.createContext({
  startGame: () => {},
  checkCliked: () => {},
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

const initialDataState = [];

//TODO: Write alternative data when API return error
const GameProvider = ({ children }) => {
  const [dataState, setDataState] = useState(initialDataState);
  const [gameState, setGameState] = useState(initialState);

  const startGame = () => {
    const data = loadFromLocalStorage('gameState');

    if (data && data.result === 0) setGameState(data);
    else {
      const categoryNumber = randomNumber(dataState.length - 1);
      const wordNumber = randomNumber(dataState[categoryNumber].length - 1);
      const { name: word } = dataState[categoryNumber][wordNumber];

      console.log(word);

      const fullWord = [...word.toLowerCase()];
      const hiddenWord = new Array(fullWord.length).fill('_', 0);
      const space = ' ';

      if (fullWord.indexOf(space) > -1) {
        const spaceTable = searchAndReturnInstances(fullWord, space);
        spaceTable.forEach(spaceNumber => (hiddenWord[spaceNumber] = space));
      }

      setGameState({
        isStarted: true,
        isLoaded: true,
        fullWord,
        hiddenWord,
        mistakes: 0,
        moves: 0,
        result: 0,
      });
    }
  };

  const checkCliked = (fullWordState, clikedButton, clikedButtonValue) => {
    clikedButton.disabled = true;

    if (fullWordState.indexOf(clikedButtonValue) > -1) {
      const quessedLetters = [...gameState.hiddenWord];
      const lettersIndex = searchAndReturnInstances(fullWordState, clikedButtonValue);
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
      isStarted: false,
      result: 'Are you giving up?',
    });
    localStorage.clear();
  };

  useEffect(() => {
    if (dataState.length === 0) {
      getDataFromSpaceXapi()
        .then(
          ({
            data: {
              data: { rockets, ships, missions },
            },
          }) => {
            setDataState([rockets, ships, missions]);
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
          result: 'You Win!',
        });
        localStorage.clear();
      }
      if (gameState.mistakes === 14) {
        setGameState({
          ...gameState,
          isStarted: false,
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
