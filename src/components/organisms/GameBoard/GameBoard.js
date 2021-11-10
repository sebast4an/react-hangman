import React, { useEffect, useState } from 'react';
import { Board, Hangman, Counters, NewGamePanel, DefaultButton, Image } from './Gameboard.styles';
import Keyboard from '../../molecules/Keyboard/Keyboard';
import StagePictures from 'components/atoms/StagePictures/StagePictures';
import Words from 'components/molecules/Words/Words';
import { Title } from 'components/atoms/Title/Title';
import { StyledList, StyledListElement } from 'components/atoms/StyledList/StyledList';
import { Line } from 'components/atoms/Line/Line';
import { StyledParagraph } from 'components/atoms/StyledParagraph/StyledParagraph';
import winnerIMG from 'assets/img/cat_winner.jpg';

const words = ['github', 'sebastian'];
const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);

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

    setGame({
      started: true,
      result: '',
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
          result: 'You Win!',
        });
      }
    }
  }, [gameState]);

  return (
    <Board>
      {game.started ? (
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
            <Title>{game.result}</Title>
            <Image src={winnerIMG} />
            <Line />
            <Title>Statistics:</Title>
            <StyledList>
              <StyledListElement>Mistakes: {gameState.mistakes}</StyledListElement>
              <StyledListElement>Moves: {gameState.moves}</StyledListElement>
            </StyledList>
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
