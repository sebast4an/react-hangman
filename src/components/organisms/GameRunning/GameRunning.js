import React from 'react';
import styled from 'styled-components';
import Keyboard from 'components/molecules/Keyboard/Keyboard';
import Words from 'components/molecules/Words/Words';
import StagePictures from 'components/atoms/StagePictures/StagePictures';

export const Hangman = styled.section`
  font-size: ${({ theme }) => theme.fontSize.xs};
`;

export const Counters = styled.div`
  color: ${({ theme }) => theme.colors.grey};
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 10px;
`;

const GameRunning = ({ gameState, handleButtons }) => (
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
);

export default GameRunning;
