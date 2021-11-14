import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Keyboard from 'components/molecules/Keyboard/Keyboard';
import Words from 'components/molecules/Words/Words';
import StagePictures from 'components/atoms/StagePictures/StagePictures';
import { GameContext } from 'providers/GameProvider';

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

const GameRunning = () => {
  const {
    gameState: { mistakes, moves, hiddenWord },
    handleButtons,
  } = useContext(GameContext);

  return (
    <>
      <Hangman>
        <Counters>
          <p>Mistakes: {mistakes} / 14</p>
          <p>Moves: {moves} </p>
        </Counters>
      </Hangman>
      <StagePictures numberstage={mistakes} />
      <Words>{hiddenWord}</Words>
      <Keyboard handleButtons={handleButtons} />
    </>
  );
};

GameRunning.propTypes = {
  mistakes: PropTypes.number,
  moves: PropTypes.number,
  hiddenWord: PropTypes.array,
  handleButtons: PropTypes.func,
};
export default GameRunning;
