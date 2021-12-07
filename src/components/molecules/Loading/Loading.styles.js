import styled from 'styled-components';

export const Wrapper = styled.div`
  text-align: center;
`;

export const LoadingSection = styled.section`
  @keyframes loading {
    0% {
      transform: rotate(0);
    }

    100% {
      transform: rotate(360deg);
    }
  }

  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
  align-items: center;
  margin: 5rem auto 0;
  position: relative;
  width: 100px;
  height: 100px;
`;

export const LoadingElement = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 10px solid ${({ theme }) => theme.colors.blue};
  border-color: ${({ theme }) => theme.colors.blue} transparent transparent transparent;
  animation: loading 1.7s infinite cubic-bezier(0.5, 0, 0.5, 1);

  &:nth-child(1) {
    animation-delay: -0.2s;
  }

  &:nth-child(2) {
    animation-delay: -0.41s;
  }

  &:nth-child(3) {
    animation-delay: -0.2s;
  }
`;
