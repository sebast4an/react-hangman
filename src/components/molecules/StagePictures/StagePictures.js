import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { HangmanImage, Images } from './StagePictures.style';
import { GameContext } from 'providers/GameProvider';

const StagePictures = () => {
  const {
    gameState: { mistakes },
  } = useContext(GameContext);

  return (
    <Images>
      <HangmanImage numberstage={mistakes} alt={`Image showing stage ${mistakes}`} />
    </Images>
  );
};

StagePictures.propTypes = {
  mistakes: PropTypes.number,
};
export default StagePictures;
