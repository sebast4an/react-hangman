import React, { useEffect, useState } from 'react';
import { Board, Hangman, Counters, NewGamePanel, DefaultButton } from './Gameboard.styles';
import Keyboard from '../../molecules/Keyboard/Keyboard';
import StagePictures from 'components/atoms/StagePictures/StagePictures';
import Words from 'components/molecules/Words/Words';
import { Title } from 'components/atoms/Title/Title';
import { StyledList, StyledListElement } from 'components/atoms/StyledList/StyledList';
import { Line } from 'components/atoms/Line/Line';
import { StyledParagraph } from 'components/atoms/StyledParagraph/StyledParagraph';

const words = ['github', 'sebastian'];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

const initialState = {
  fullWord: [],
  hiddenWord: [],
  mistakes: 0,
  moves: 0,
  result: '',
};

const GameBoard = () => {
  const [gameState, setGameState] = useState(initialState);
  const [gameStarted, setGameStarted] = useState(false);

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
      result: '',
    });

    setGameStarted(true); //TODO: change !!!!!!
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

  useEffect(() => {
    const fullWord = gameState.fullWord.join('');
    const hiddenWord = gameState.hiddenWord.join('');
    const moves = gameState.moves;

    if (moves > 0) {
      if (fullWord === hiddenWord) {
        setGameStarted(false);
      }
      if (gameState.mistakes === 14) {
        setGameStarted(false);
      }
    }
  }, [gameStarted, gameState]);

  return (
    <Board>
      {gameStarted ? (
        <>
          <Hangman>
            <Counters>
              <p>Mistakes: {gameState.mistakes} / 14</p>
              <p>Moves: {gameState.moves} </p>
            </Counters>
          </Hangman>
          <StagePictures numberstage={gameState.mistakes} />
          <Words>{gameState.hiddenWord}</Words>
          <Keyboard handleButtons={handleButtons} />
        </>
      ) : (
        <>
          <NewGamePanel>
            <Title>{gameState.result}</Title>
            <Line />
            <Title>Statistics:</Title>
            <StyledList>
              <StyledListElement>Mistakes: {gameState.mistakes}</StyledListElement>
              <StyledListElement>Moves: {gameState.moves}</StyledListElement>
            </StyledList>
            <Line />
            <Title>Word:</Title>
            <StyledParagraph>{gameState.fullWord}</StyledParagraph>
            <DefaultButton onClick={startGame}>Start game</DefaultButton>
          </NewGamePanel>
        </>
      )}
    </Board>
  );
};

export default GameBoard;
