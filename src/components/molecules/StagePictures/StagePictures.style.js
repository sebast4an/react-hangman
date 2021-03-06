import styled from 'styled-components';
import { ReactComponent as HangmanSVG } from 'assets/svg/hangman_stages.svg';

export const Images = styled.div`
  text-align: center;
`;

export const HangmanImage = styled(HangmanSVG)`
  height: 100%;
  max-height: 180px;
  width: auto;

  .stage {
    opacity: 0;
    transition: opacity 0.5s ease;

    &:nth-child(-n + ${({ numberstage }) => numberstage}) {
      opacity: 1;
      fill: ${({ theme }) => theme.colors.grey};
    }

    &.face {
      fill: ${({ theme }) => theme.colors.black};
    }
  }
`;
