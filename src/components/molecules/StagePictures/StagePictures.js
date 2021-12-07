import React, { useContext } from 'react';

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

export default StagePictures;
