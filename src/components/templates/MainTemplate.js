import React from 'react';
import styled from 'styled-components';
import Navigation from 'components/organisms/Navigation/Navigation';
import GameBoard from 'components/organisms/GameBoard/GameBoard';

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background-color: ${({ theme }) => theme.colors.black};
  display: flex;
  justify-content: center;
`;

const MainTemplate = () => {
  return (
    <Wrapper>
      <Navigation />
      <GameBoard />
    </Wrapper>
  );
};

export default MainTemplate;
