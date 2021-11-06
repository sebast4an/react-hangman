import React from 'react';
import styled from 'styled-components';
import { ReactComponent as HangmanImage } from 'assets/svg/hangman_stages.svg';

const Images = styled.div`
  text-align: center;

  svg {
    height: 100%;
    max-height: 180px;
    width: auto;

    .stage {
      display: none;
    }

    .stage__1 {
      display: block;
      fill: ${({ theme }) => theme.colors.grey};
    }

    .face {
      fill: ${({ theme }) => theme.colors.black};
    }
  }
`;

const StagePictures = () => {
  return (
    <Images>
      <HangmanImage />
    </Images>
  );
};
export default StagePictures;
